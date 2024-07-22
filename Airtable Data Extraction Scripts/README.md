## How to use this Code


This repository contains the source code to extract the latest volunteer registration information for Santropol Roulant from Airtable.

The input here is basically information aggregated from volunteers filling out forms to volunteer at the Roulant. The output here is a series of tables as well as an analytics dashboard made with Evidence. 

### After cloning the repository:

If you would like to run any of the Python scripts (stored in the folder duly named Airtable Data Extraction Scripts), please ensure that you have all of the dependencies listed in the requirements.txt file installed with a simple ```pip install -r requirements.txt```.

For now, the Python scripts are to be simply run with a simple ```python3 file_name.py```.

### Scheduling via CRON Jobs

If you are interested in automating this file run, [cron](https://en.wikipedia.org/wiki/Cron) jobs are highly suggested. It comes in-built within the terminal and is fully free!

For example, if you would like for any of these scripts to automatically be run at the end of each month, you can run a cron job using the following syntax:

```59 23 28-31 * * [ "$(date +\%d -d tomorrow)" = "01" ] && python3 /path/to/filename.py```

Please make sure to enter the above line in your crontab file by performing a ```crontab -e```.

The scripts here are designed to connect to a MySQL database locally, and therefore the login credentials have intentionally been left obfuscated. Please feel free to use your own set of credentials in order to create the tables in your local DB. Please also use your own Airtable Personal Access Tokens wherever necessary.


