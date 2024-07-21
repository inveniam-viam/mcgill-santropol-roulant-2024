"""
    Source code to automate the extraction of emergency contact information
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

# Connecting to the Airtable API and getting the Emergency Contact Info

api = Api(os.environ['AIRTABLE_API_KEY'])

table = api.table('appB7a5gvGu8ELiEp', 'tblccphqaWhJbkEDx')

# declaring the fields needed for the Emergency Contact Table

dim_volunteer_emergency_contact_fields: list[str] = [
    'Record ID',
    'Emergency contact name',
    'EC relationship',
    'EC phone',
    'EC email',
]

# Cutting the API response to just those fields necessary for ICE information

dim_volunteer_emergency_contacts = table.all(fields = dim_volunteer_emergency_contact_fields)


# Setting up an empty dataframe to collect all the ICE information

ec_df: pd.DataFrame = pd.DataFrame(columns = [
    'Record ID', 'Emergency contact name', 
    'EC relationship', 'EC phone', 'EC email'])

# Adding the requisite information from the API response to the dataframe

for record in dim_volunteer_emergency_contacts:

    volunteer_df = pd.DataFrame([record['fields']])

    ec_df = pd.concat([ec_df, volunteer_df], ignore_index = True)

# Renaming the dataframe columns according to the decided schema

ec_mappings: dict = {
    'Record ID': 'RECORD_ID',
    'Emergency contact name': 'EMERGENCY_CONTACT_NAME',
    'EC relationship': 'EMERGENCY_CONTACT_RELATIONSHIP',
    'EC phone': 'EMERGENCY_CONTACT_PHONE',
    'EC email': 'EMERGENCY_CONTACT_EMAIL',
}

ec_df.rename(mapper = ec_mappings, axis = 'columns', inplace = True)

# Dropping any rows that do not have an Emergency Contact Name

ec_df.dropna(axis = 'index', subset = ['EMERGENCY_CONTACT_NAME'], inplace = True)

# Sanitizing the Phone Numbers to reflect the 514-XXX-YYYY format

ec_df['EMERGENCY_CONTACT_PHONE'] = ec_df['EMERGENCY_CONTACT_PHONE'].apply(
    lambda x: f"{re.sub(r'\D', '', str(x))[:3]}-{re.sub(r'\D', '', 
    str(x))[3:6]}-{re.sub(r'\D', '', str(x))[6:]}"
    if pd.notnull(x) else None
)

# Sanitizing the email addresses to be fully lowercase

ec_df['EMERGENCY_CONTACT_EMAIL'] = ec_df['EMERGENCY_CONTACT_EMAIL'].apply(
    lambda x: x.lower() if pd.notnull(x) else None)

# Setting up MySQL Database Connection

user: str = 'root'
password: str = 'ENTER_YOUR_PASSWORD'
host: str = 'localhost'             # this code works with a locally hosted MySQL database
port: int = 3306                    # default MySQL port number
database: str = 'souschefdb'
table_name: str = 'DIM_VOLUNTEER_ICE'

user = urllib.parse.quote_plus(user)
password = urllib.parse.quote_plus(password)

# Creating the MySQL Database Connection

engine = create_engine(f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}')

# Inserting the values from the API response into the MySQL table

ec_df.to_sql(name=table_name, con=engine, if_exists='append', index=False)

