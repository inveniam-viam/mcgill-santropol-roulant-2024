"""
    Source code to automate the extraction of volunteer
    information from the associated table in Airtable.

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

# MySQL Database connection parameters
USER = 'root'
PASSWORD = 'ENTER_YOUR_PASSWORD'
HOST = 'localhost'
PORT = '3306'
DATABASE = 'souschefdb'

USER = urllib.parse.quote_plus(USER)
PASSWORD = urllib.parse.quote_plus(PASSWORD)

engine = create_engine(f'mysql+pymysql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}')

# Connecting to the Airtable API and getting the Emergency Contact Info

api = Api(os.environ['AIRTABLE_API_KEY'])

table = api.table('appB7a5gvGu8ELiEp', 'tblccphqaWhJbkEDx')

# declaring the fields needed for the central Volunteer Table

fact_volunteer_fields: list[str] = [
    'Record ID',
    'Status',
    'Last Modified',
    'Account ID (VolApp)',
    'Prenom',
    'Nom',
    'Birthdate',
    'Age',
    'Created',
    'date created (original)',
    'WS date',
    'Status (from Welcome session date)',
    'Where (from Welcome session date)',
    'Staff (from welcome session date)',
    'Pronoun',
    'Primary Language',
    'Call list',
    'Last minute?',
    'Last spoken',
    'Left message',
    'live close?',
    "Besoin d'accomodements",
    'Courriel',
    'COVID consent',
    'Programs',
    "Programs (implication confirmé d'un groupe)",
    'Skills',
    'Other skills',
    'Special needs',
    'Vol tags',
    'Days available (old)',
    'Delivery preferences',
    'Delivery availability',
    'Kitchen availability',
    'Photo permission?',
    'Expérience en cuisine?',
    'Heures scolaire?',
    'Travaux communautaires et/ou compensatoires?',
    "Nombres d'heures et date limite",
    'Data source (for imports)',
]

# Cutting the API response to just those fields necessary for 
# volunteer information as per schema design exercise

fact_volunteer = table.all(fields = fact_volunteer_fields)

# Setting up an empty dataframe to collect necessary volunteer information

fact_vol_df = pd.DataFrame(columns = fact_volunteer_fields)

# Adding the requisite information from the API response to the dataframe

for record in fact_volunteer:

    volunteer_df = pd.DataFrame([record['fields']])

    fact_vol_df = pd.concat([fact_vol_df, volunteer_df], ignore_index = True)

# Renaming the dataframe columns according to the decided schema

fact_vol_mappings: dict = {
    'Record ID': 'RECORD_ID',
    'Status': 'VOL_STATUS',
    'Last Modified': 'LAST_MODIFIED',
    'Account ID (VolApp)': 'VOL_APP_ACCOUNT_ID',
    'Prenom': 'VOL_FIRST_NAME',
    'Nom': 'VOL_LAST_NAME',
    'Birthdate': 'VOL_DATE_OF_BIRTH',
    'Age': 'VOL_AGE',
    'Created': 'VOL_CREATED',
    'date created (original)': 'VOL_ORIGINAL_DATE_CREATED',
    'WS date': 'VOL_WELCOME_SESSION_DATE',
    'Status (from Welcome session date)': 'VOL_WELCOME_SESSION_STATUS',
    'Where (from Welcome session date)': 'VOL_WELCOME_SESSION_LOCATION',
    'Staff (from welcome session date)': 'VOL_WELCOME_SESSION_STAFF',
    'Pronoun': 'VOL_PREFERRED_PRONOUNS',
    'Primary Language': 'VOL_PRIMARY_LANGUAGE',
    'Call list': 'VOL_CALL_LIST_FLAG',
    'Last minute?': 'VOL_LAST_MINUTE_FLAG',
    'Last spoken': 'VOL_LAST_SPOKEN_DATE',
    'Left message': 'VOL_LEFT_MESSAGE_DATE',
    'live close?': 'VOL_LIVE_CLOSE_FLAG',
    "Besoin d'accomodements": 'VOL_SPECIAL_NEEDS_FLAG',
    'Courriel': 'VOL_EMAIL_ADDRESS',
    'COVID consent': 'VOL_COVID_CONSENT_FLAG',
    'Programs': 'VOL_PROGRAMS',
    "Programs (implication confirmé d'un groupe)": 'VOL_PROGRAMS_GROUP',
    'Skills': 'VOL_SKILLS_MAIN',
    'Other skills': 'VOL_SKILLS_OTHERS',
    'Special needs': 'VOL_SPECIAL_NEEDS',
    'Vol tags': 'VOL_TAGS',
    'Days available (old)': 'VOL_DAYS_AVAIL_OLD',
    'Delivery preferences': 'VOL_DELIVERIES_PREFERENCE',
    'Delivery availability': 'VOL_DELIVERY_AVAIL',
    'Kitchen availability': 'VOL_KITCHEN_AVAIL',
    'Photo permission?': 'VOL_PHOTO_CONSENT_STATUS',
    'Expérience en cuisine?': 'VOL_KITCHEN_EXPERIENCE',
    'Heures scolaire?': 'VOL_SCHOOL_HOURS_FLAG',
    'Travaux communautaires et/ou compensatoires?': 'VOL_COMMUNITY_PAID_FLAG',
    "Nombres d'heures et date limite": 'VOL_HOURS_DATES',
    'Data source (for imports)': 'VOL_DATA_SOURCE',
}

fact_vol_df.rename(mapper = fact_vol_mappings, axis = 'columns', inplace = True)

# Dropping any rows that do not have a first name AND last name
fact_vol_df.dropna(axis = 'index', subset = ['VOL_FIRST_NAME', 'VOL_LAST_NAME'], how = 'all', inplace = True)
# Then, dropping any rows that do not have a record ID
fact_vol_df.dropna(axis = 'index', subset = ['RECORD_ID', 'VOL_FIRST_NAME', 'VOL_LAST_NAME'], how = 'all', inplace = True)


###########################
# SANITIZATION
###########################

# Sanitizing email addresses

fact_vol_df['VOL_EMAIL_ADDRESS'] = fact_vol_df['VOL_EMAIL_ADDRESS'].apply(lambda z: z.lower() if pd.notnull(z) else None)

# Sanitizing valid DATE object fields

fact_vol_df['VOL_DATE_OF_BIRTH'] = pd.to_datetime(fact_vol_df['VOL_DATE_OF_BIRTH'], errors = 'coerce').dt.date

fact_vol_df['VOL_CREATED'] = pd.to_datetime(fact_vol_df['VOL_CREATED'], errors = 'coerce').dt.date

fact_vol_df['VOL_ORIGINAL_DATE_CREATED'] = pd.to_datetime(fact_vol_df['VOL_ORIGINAL_DATE_CREATED'], errors = 'coerce').dt.date

# Coercing all age values to numerics, else replace with NaN

fact_vol_df['VOL_AGE'] = pd.to_numeric(fact_vol_df['VOL_AGE'], errors = 'coerce')

def clean_list_columns(df, columns):

    """Function that cleans columns that have values which are lists."""

    for col in columns:

        df[col] = df[col].apply(
            lambda x: x[0] if isinstance(x, list) and x else None
        )
        
    return df

# List of columns to apply the mapping to
list_based_columns = ['VOL_WELCOME_SESSION_DATE', 'VOL_WELCOME_SESSION_STATUS', 'VOL_WELCOME_SESSION_LOCATION', 'VOL_KITCHEN_EXPERIENCE']

# Apply the function to the specified columns
fact_vol_df = clean_list_columns(fact_vol_df, list_based_columns)

# Sanitizing the VOL_WELCOME_SESSION_DATE column

fact_vol_df['VOL_WELCOME_SESSION_DATE'] = pd.to_datetime(fact_vol_df['VOL_WELCOME_SESSION_DATE'], errors = 'coerce').dt.date

# Re-mapping VOL_WELCOME_SESSION_LOCATION

# Previous Possible Values - "At Santropol Roulant / Au Santropol Roulant", "Online / En ligne"

# NEW Possible Values - Santropol Roulant, Online

fact_vol_df['VOL_WELCOME_SESSION_LOCATION'] = fact_vol_df['VOL_WELCOME_SESSION_LOCATION'].apply(
    lambda x: 'Santropol Roulant' if pd.notnull(x) and re.search(r'\bAt Santropol Roulant\b', x) 
    else 'Online' if pd.notnull(x) and re.search(r'\bOnline\b', x) 
    else x
)

# Re-mapping VOL_PRIMARY_LANGUAGE

# OLD Possible Values: English, Français, [English, Français], [Français, English]

# NEW Possible Values: English, Français, Bilingual

fact_vol_df['VOL_PRIMARY_LANGUAGE'] = fact_vol_df['VOL_PRIMARY_LANGUAGE'].apply(
    lambda x: 'Bilingual' if isinstance(x, list) and len(x) > 1 and 'English' in x and 'Français' in x else x[0] if isinstance(x, list) and len(x) == 1 else None
)

def yes_no_mappings(df: pd.DataFrame, columns: list[str]) -> pd.DataFrame:

    """Handling columns that have single select Yes or No on the registration form."""

    for col in columns:

        df[col] = df[col].apply(lambda x: re.sub(r'\s*/\s*', '/', x) if isinstance(x, str) else x)

        df[col] = df[col].apply(
            lambda x: 'Yes' if x == 'Oui/Yes' else 'No' if x == 'Non/No' else 'No' if x == 'Non/Non' else x
        )

    return df

# List of columns to apply the mapping to
yes_no_columns = ['VOL_CALL_LIST_FLAG', 'VOL_LAST_MINUTE_FLAG', 'VOL_LIVE_CLOSE_FLAG', 'VOL_SPECIAL_NEEDS_FLAG', 'VOL_PHOTO_CONSENT_STATUS',
'VOL_KITCHEN_EXPERIENCE', 'VOL_SCHOOL_HOURS_FLAG', 'VOL_COMMUNITY_PAID_FLAG']

# Applying the function to the specified columns
fact_vol_df = yes_no_mappings(fact_vol_df, yes_no_columns)

# Re-mapping programs for database clarity and boolean flag creation

program_map: dict = {
    "Livraison / Delivery": "PGM_DELIVERY",
    "Cuisine / Kitchen": "PGM_KITCHEN",
    "Agriculture urbaine / Urban Agriculture": "PGM_URBAN_AGRICULTURE",
    "Ferme / Farm": "PGM_FARM",
    "Appels de bienveillance / Caring Calls": "PGM_CARING_CALLS",
    "Paniers bio / Veggie baskets": "PGM_VEGGIE_BASKETS",
    "Événements / Events": "PGM_EVENTS",
    "Collectifs / Collectives": "PGM_COLLECTIVES"
}


skills_map: dict = {
    "Saisie des données / Data entry": "SKILLS_DATA_ENTRY",
    "Traduction / Translation": "SKILLS_TRANSLATION",
    "Photographie / Photography": "SKILLS_PHOTOGRAPHY",
    "Autre / Other": "SKILLS_OTHER",
    "Graphisme / Graphic design": "SKILLS_GRAPHIC_DESIGN",
    "Collecte de fonds": "SKILLS_FUNDRAISING",
    "Événements": "SKILLS_EVENTS"
}

delivery_pref_map: dict = {
    "Possède une voiture / Have a car": "DEL_HAVE_A_CAR",
    "Par vélo / By bike": "DEL_BY_BIKE",
    "25 ans ou plus / Am 25+": "DEL_AGE_GEQ_25",
    "Compte Communauto Account": "DEL_ACCOUNT_COMMUNAUTO",
    "Par paires / In pairs": "DEL_IN_PAIRS",
    "Par transport en commun / By public transport": "DEL_BY_PUBLIC_TRANSIT",
    "Possède un permis de conduire / Have a drivers licence": "DEL_LICENSED_TO_DRIVE",
    "Compte Turo / Have a Turo account": "DEL_ACCOUNT_TURO"
}

delivery_shift_map: dict =  {
    "Lundi/Mon 14:45-18:30": "DEL_SHIFT_MONDAY",
    "Mardi/Tue 14:45-18:30": "DEL_SHIFT_TUESDAY",
    "Mercredi/Wed 14:45-18:30": "DEL_SHIFT_WEDNESDAY",
    "Vendredi/Fri 14:45-18:30": "DEL_SHIFT_FRIDAY",
    "Samedi/Sat 14:45-18:30": "DEL_SHIFT_SATURDAY"
}

kitchen_avail_map: dict = {
    "Lundi/Mon 9:30-12:30": "KITCHEN_MONDAY_AM",
    "Lundi/Mon 13:30-16:30": "KITCHEN_MONDAY_PM",
    "Mardi/Tue 9:30-12:30": "KITCHEN_TUESDAY_AM",
    "Mercredi/Wed 9:30-12:30 ": "KITCHEN_WEDNESDAY_AM",
    "Vendredi/Fri 9:30-12:30": "KITCHEN_FRIDAY_AM",
    "Mardi/Tue 13:30-16:30": "KITCHEN_TUESDAY_PM",
    "Mercredi/Wed 13:30-16:30": "KITCHEN_WEDNESDAY_PM",
    "Jeudi/Thur 13:30-16:30": "KITCHEN_THURSDAY_PM",
    "Vendredi/Fri 13:30-16:30": "KITCHEN_FRIDAY_PM",
    "Samedi/Sat 9:30-12:30": "KITCHEN_SATURDAY_AM",
    "Samedi/Sat 13:30-16:30": "KITCHEN_SATURDAY_PM"
}

def create_flag_columns(df, column, mapping):

    """Creating the flag columns"""

    # Initialize all flag columns with 0s

    for flag in mapping.values():

        df[flag] = 0
    
    # Set the flag to 1 based on the values in the column
    for i, programs in df[column].items():

        if isinstance(programs, list):

            for program in programs:

                if program in mapping:

                    df.at[i, mapping[program]] = 1
    
    return df

fact_vol_df = create_flag_columns(fact_vol_df, "VOL_PROGRAMS", program_map)

fact_vol_df = create_flag_columns(fact_vol_df, "VOL_SKILLS_MAIN", skills_map)

fact_vol_df = create_flag_columns(fact_vol_df, "VOL_DELIVERIES_PREFERENCE", delivery_pref_map)

fact_vol_df = create_flag_columns(fact_vol_df, "VOL_DELIVERY_AVAIL", delivery_shift_map)

fact_vol_df = create_flag_columns(fact_vol_df, "VOL_KITCHEN_AVAIL", kitchen_avail_map)

fact_vol_df[fact_vol_df['VOL_WELCOME_SESSION_DATE'].notnull()].head(5)

def extract_staff_info(staff_list, key):

    """Extracting specifics about welcome session staff wherever available."""

    if isinstance(staff_list, list) and staff_list:

        return staff_list[0].get(key, None)

    return None

# Create new columns by applying the function
fact_vol_df['VOL_WELCOME_SESSION_STAFF_NAME'] = fact_vol_df['VOL_WELCOME_SESSION_STAFF'].apply(lambda x: extract_staff_info(x, 'name'))
fact_vol_df['VOL_WELCOME_SESSION_STAFF_ID'] = fact_vol_df['VOL_WELCOME_SESSION_STAFF'].apply(lambda x: extract_staff_info(x, 'id'))
fact_vol_df['VOL_WELCOME_SESSION_STAFF_EMAIL'] = fact_vol_df['VOL_WELCOME_SESSION_STAFF'].apply(lambda x: extract_staff_info(x, 'email'))

# CREATING DIMENSION TABLES

all_table_cols = ['RECORD_ID', 'VOL_FIRST_NAME', 'VOL_LAST_NAME']

# DIM_VOLUNTEER_DELIVERY_PREFERENCES

dim_delivery_pref_df = fact_vol_df[all_table_cols + list(delivery_pref_map.values())]

dim_delivery_pref_df.to_sql(name='DIM_VOLUNTEER_DELIVERY_PREFERENCES', con=engine, if_exists='append', index=False)

# DIM_VOLUNTEER_PROGRAM_PREFERENCES

dim_programs_df = fact_vol_df[all_table_cols + list(program_map.values())]

dim_programs_df.to_sql(name='DIM_VOLUNTEER_PROGRAM_PREFERENCES', con=engine, if_exists='append', index=False)


# DIM_VOLUNTEER_SKILLS

dim_skills_df = fact_vol_df[all_table_cols + list(skills_map.values())]

dim_skills_df.to_sql(name='DIM_VOLUNTEER_SKILLS', con=engine, if_exists='append', index=False)

# DIM_VOLUNTEER_DELIVERY_SHIFT_AVAILABILITY

dim_delivery_shifts_df = fact_vol_df[all_table_cols + list(delivery_shift_map.values())]

dim_delivery_shifts_df.to_sql(name='DIM_VOLUNTEER_DELIVERY_SHIFT_AVAILABILITY', con=engine, if_exists='append', index=False)

# DIM_VOLUNTEER_KITCHEN_SHIFT_AVAILABILITY

dim_kitchen_shifts_df = fact_vol_df[all_table_cols + list(kitchen_avail_map.values())]

dim_kitchen_shifts_df.to_sql(name='DIM_VOLUNTEER_KITCHEN_SHIFT_AVAILABILITY', con=engine, if_exists='append', index=False)


# CREATING THE CENTRAL FACT TABLE

fact_vol_final = fact_vol_df[['RECORD_ID', 'VOL_STATUS', 'LAST_MODIFIED', 'VOL_APP_ACCOUNT_ID',
       'VOL_FIRST_NAME', 'VOL_LAST_NAME', 'VOL_DATE_OF_BIRTH', 'VOL_AGE',
       'VOL_CREATED', 'VOL_ORIGINAL_DATE_CREATED', 'VOL_WELCOME_SESSION_DATE',
       'VOL_WELCOME_SESSION_STATUS', 'VOL_WELCOME_SESSION_LOCATION','VOL_PREFERRED_PRONOUNS',
       'VOL_PRIMARY_LANGUAGE', 'VOL_CALL_LIST_FLAG', 'VOL_LAST_MINUTE_FLAG',
       'VOL_LAST_SPOKEN_DATE', 'VOL_LEFT_MESSAGE_DATE', 'VOL_LIVE_CLOSE_FLAG',
       'VOL_SPECIAL_NEEDS_FLAG', 'VOL_EMAIL_ADDRESS', 'VOL_COVID_CONSENT_FLAG',
       'VOL_PROGRAMS', 'VOL_PROGRAMS_GROUP', 'VOL_SKILLS_MAIN',
       'VOL_SKILLS_OTHERS', 'VOL_SPECIAL_NEEDS', 'VOL_TAGS',
       'VOL_DAYS_AVAIL_OLD', 'VOL_DELIVERIES_PREFERENCE', 'VOL_DELIVERY_AVAIL',
       'VOL_KITCHEN_AVAIL', 'VOL_PHOTO_CONSENT_STATUS',
       'VOL_KITCHEN_EXPERIENCE', 'VOL_SCHOOL_HOURS_FLAG',
       'VOL_COMMUNITY_PAID_FLAG', 'VOL_HOURS_DATES', 'VOL_DATA_SOURCE',
        'VOL_WELCOME_SESSION_STAFF_NAME',
       'VOL_WELCOME_SESSION_STAFF_ID', 'VOL_WELCOME_SESSION_STAFF_EMAIL']]

def convert_lists_to_strings(df, columns):

    for column in columns:

        if column in df.columns:

            df[column] = df[column].apply(lambda x: ', '.join(x) if isinstance(x, list) else x)

    return df

fact_vol_final_df = convert_lists_to_strings(fact_vol_final, list(fact_vol_final.columns))

fact_vol_final_df.to_sql(name='FACT_VOLUNTEER_CENTRAL', con=engine, if_exists='append', index=False)
