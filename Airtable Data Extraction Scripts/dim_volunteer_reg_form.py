"""
    Source code to automate the extraction of registration forms filled
    by volunteers  to register with Santropol Roulant.

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

dim_vol_forms_fields: list[str] = [
    'Record ID',
    'Vol forms',
]

# Cutting the API response to just those fields necessary for registration form information

dim_volunteer_forms = table.all(fields = dim_vol_forms_fields)

# Setting up an empty dataframe to collect all the registration form-related information

vol_form_columns: str = ['Record ID', 'Created Time', 'Form ID', 'Form URL']

vol_forms_df = pd.DataFrame(columns = vol_form_columns)

# Adding the requisite information from the API response to the dataframe

for record in dim_volunteer_forms:

    record_id = record['id']

    created_time = record['createdTime']

    vol_forms = record['fields'].get('Vol forms', None)

    if isinstance(vol_forms, list):

        for item in vol_forms:

            vol_form_id = item.get('id', None)

            vol_form_url = item.get('url', None)

    volunteer_df = pd.DataFrame([
        {
            'Record ID': record_id,
            'Created Time': created_time,
            'Form ID': vol_form_id,
            'Form URL': vol_form_url,
        }
    ])

    vol_forms_df = pd.concat([vol_forms_df, volunteer_df], ignore_index = True)

# Renaming the dataframe columns according to the decided schema

vol_forms_mappings: dict = {
    'Record ID': 'RECORD_ID',
    'Created Time': 'FORM_CREATED_DATE',
    'Form ID': 'FORM_ID',
    'Form URL': 'FORM_URL',
}

vol_forms_df.rename(mapper = vol_forms_mappings, axis = 'columns', inplace = True)

# Dropping any rows that do not have a phone/email

vol_forms_df.dropna(axis = 'index', subset = ['RECORD_ID', 'FORM_CREATED_DATE'], inplace = True)

# Sanitizing the timestamps to just include date

vol_forms_df['FORM_CREATED_DATE'] = pd.to_datetime(vol_forms_df['FORM_CREATED_DATE']).dt.date

# Setting up MySQL Database Connection

user: str = 'root'
password: str = 'ENTER_YOUR_PASSWORD'
host: str = 'localhost'             # this code works with a locally hosted MySQL database
port: int = 3306                    # default MySQL port number
database: str = 'souschefdb'
table_name: str = 'DIM_VOLUNTEER_FORM'

user = urllib.parse.quote_plus(user)
password = urllib.parse.quote_plus(password)

# Creating the MySQL Database Connection

engine = create_engine(f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}')

# Inserting the values from the API response into the MySQL table

vol_forms_df.to_sql(name=table_name, con=engine, if_exists='append', index=False)
