## How to use this Code


This repository contains the source code to extract the latest volunteer registration information for Santropol Roulant from Airtable.

The input here is basically information aggregated from volunteers filling out forms to volunteer at the Roulant. The output here is a series of tables as well as an analytics dashboard made with Evidence. 

After cloning the repository:

If you would like to run any of the Python scripts (stored in the folder duly named Airtable-Automation-Scripts), please ensure that you have all of the dependencies listed in the requirements.txt file installed with a simple ```pip install -r requirements.txt```.

For now, the Python scripts are to be simply run with a simple ```python3 file_name.py```.

The scripts here are designed to connect to a MySQL database locally, and therefore the login credentials have intentionally been left obfuscated. Please feel free to use your own set of credentials in order to create the tables in your local DB. Please also use your own Airtable Personal Access Tokens wherever necessary.


