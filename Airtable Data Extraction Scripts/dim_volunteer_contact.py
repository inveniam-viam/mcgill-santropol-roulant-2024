"""
    Source code to automate the extraction of contact information
    supplied by volunteers on the form they used to register with
    Santropol Roulant.

    Author: Jared Balakrishnan
    Email: jared@santropolroulant.org


    In order to ensure that you have all of the required libraries installed,
    please use the requirements.txt file that is made available in this repo.
"""

# Importing the requisite libraries for this script

import os
import re
import urllib.parse
import pandas as pd
import pymysql
from sqlalchemy import create_engine
from pyairtable import Api

# Connecting to the Airtable API and getting the Contact Info

api = Api(os.environ['AIRTABLE_API_KEY'])

table = api.table('appB7a5gvGu8ELiEp', 'tblccphqaWhJbkEDx')

# declaring the fields needed for the Contact Table

dim_volunteer_contact_fields: list[str] = [
    'Record ID',
    'Téléphone',
    '2e Téléphone',
    'Courriel',
    'Address - street',
    'Address -city',
    'Address - province',
    'Address - Country',
]
# Cutting the API response to just those fields necessary for Contact information

dim_volunteer_contact_info = table.all(fields = dim_volunteer_contact_fields)

# Setting up an empty dataframe to collect all the Contact information

vol_contact_columns: list[str] = ['Record ID', 'Téléphone', '2e Téléphone', 'Courriel',
 'Address - street', 'Address -city', 'Address - province', 'Address - Country']

vol_contact_df = pd.DataFrame(columns = vol_contact_columns)

# Adding the requisite information from the API response to the dataframe

for record in dim_volunteer_contact_info:

    volunteer_df = pd.DataFrame([record['fields']])

    vol_contact_df = pd.concat([vol_contact_df, volunteer_df], ignore_index = True)

# Renaming the dataframe columns according to the decided schema

vol_contact_mappings: dict = {
    'Record ID': 'RECORD_ID',
    'Téléphone': 'VOLUNTEER_PHONE',
    '2e Téléphone': 'VOLUNTEER_ALTERNATE_PHONE',
    'Courriel': 'VOLUNTEER_EMAIL',
    'Address - street': 'VOLUNTEER_ADDRESS_STREET',
    'Address -city': 'VOLUNTEER_ADDRESS_CITY',
    'Address - province': 'VOLUNTEER_ADDRESS_PROVINCE', 
    'Address - Country': 'VOLUNTEER_ADDRESS_COUNTRY',
}

vol_contact_df.rename(mapper = vol_contact_mappings, axis = 'columns', inplace = True)

# Dropping any rows that do not have a phone/email

vol_contact_df.dropna(axis = 'index', subset = 
['VOLUNTEER_PHONE', 'VOLUNTEER_ALTERNATE_PHONE', 'VOLUNTEER_EMAIL'], how = 'all', inplace = True)

# Sanitizing the Phone Numbers to reflect the 514-XXX-YYYY format

vol_contact_df['VOLUNTEER_PHONE'] = vol_contact_df['VOLUNTEER_PHONE'].apply(
    lambda x: f"{re.sub(r'\D', '', str(x))[:3]}-{re.sub(r'\D', '',
     str(x))[3:6]}-{re.sub(r'\D', '', str(x))[6:]}"
    if pd.notnull(x) else None
)

# Sanitizing the email addresses to be fully lowercase

vol_contact_df['VOLUNTEER_EMAIL'] = vol_contact_df['VOLUNTEER_EMAIL'].apply(
    lambda x: x.lower() if pd.notnull(x) else None)

# Setting up MySQL Database Connection

user: str = 'root'
password: str = 'ENTER_YOUR_PASSWORD'
host: str = 'localhost'             # this code works with a locally hosted MySQL database
port: int = 3306                    # default MySQL port number
database: str = 'souschefdb'
table_name: str = 'DIM_VOLUNTEER_CONTACT'

user = urllib.parse.quote_plus(user)
password = urllib.parse.quote_plus(password)

# Creating the MySQL Database Connection

engine = create_engine(f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}')

# Inserting the values from the API response into the MySQL table

vol_contact_df.to_sql(name=table_name, con=engine, if_exists='append', index=False)
