-- SQL Queries to generate volunteering registration metrics from Santropol Roulant are listed below:

-- If you ever see a query that has YEAR(column_name) = YEAR(CURRENT_DATE)

-- On Evidence, the filter selector for year can be manipulated by adjusting the source code to
-- YEAR(order_delivery_date) = '${inputs.vol_year.value}'

-- For a copy of the ERD for this schema, please refer to the Project-Technical-Wiki.pdf listed under the PDF Documents folder in this repository.


-- Tracking the number of yearly volunteering registrations received by the Roulant

  SELECT YEAR(VOL_CREATED) AS year,
  COUNT(DISTINCT RECORD_ID) AS volunteers_registered
  FROM airtable.FACT_VOLUNTEER_CENTRAL
  GROUP BY 1;

-- Tracking the number of monthly volunteer registrations received by the Roulant per-month, this calendar year

  SELECT DATE_TRUNC('month', VOL_CREATED) AS month,
  COUNT(DISTINCT id) AS volunteers_registered
  FROM airtable.FACT_VOLUNTEER_CENTRAL
  WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
  GROUP BY 1;

-- Number of volunteers registered in the current calendar year

SELECT COUNT(DISTINCT RECORD_ID) AS volunteers_registered
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE);


-- average age of newly registered volunteer in the current calendar year
SELECT CAST(AVG(VOL_AGE) AS INTEGER) AS average_age
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE);


-- count of young volunteer registrations for the current year (ages 12 to 17)
SELECT COUNT(DISTINCT RECORD_ID) AS young_volunteers_registered
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE VOL_AGE BETWEEN 12 AND 17
AND YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)


-- count of adult volunteer registrations for the current year (ages 18 to 59)
SELECT COUNT(DISTINCT RECORD_ID) AS adult_volunteers_registered
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE VOL_AGE BETWEEN 18 AND 59
AND YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)


-- count of senior volunteer registrations for the current year (ages 60+)
SELECT COUNT(DISTINCT RECORD_ID) AS senior_volunteers_registered
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE VOL_AGE >= 60
AND YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)

-- count of volunteer registrations made as part of a school or university curriculum/requirement
SELECT COUNT(DISTINCT RECORD_ID) AS School_Mandated_Registrations
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
AND VOL_SCHOOL_HOURS_FLAG = 'Yes';

-- count of volunteer registrations made as part of mandated community service or paid work
SELECT COUNT(DISTINCT RECORD_ID) AS Paid_or_Community_Service_Registrations
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
AND VOL_COMMUNITY_PAID_FLAG = 'Yes';

-- linguistic demographic among new volunteer registrations
SELECT COALESCE(VOL_PRIMARY_LANGUAGE, 'Information not Provided') AS primary_language,
       COUNT(DISTINCT RECORD_ID) AS volunteers_registered
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
GROUP BY 1
ORDER BY 2 DESC

-- prior kitchen experience among volunteers
SELECT COUNT(DISTINCT RECORD_ID) AS Volunteers_with_Prior_Kitchen_Experience
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
AND VOL_KITCHEN_EXPERIENCE = 'Yes';

-- more detailed age breakdown of new volunteer registrations

WITH age_group AS (
    SELECT RECORD_ID,
           CASE WHEN VOL_AGE BETWEEN 12 AND 17 THEN 'Minors (< 18)'
                WHEN VOL_AGE BETWEEN 18 AND 25 THEN 'Young Adults (18-25)'
                WHEN VOL_AGE BETWEEN 25 AND 40 THEN 'Adults (25-40)'
                WHEN VOL_AGE BETWEEN 40 AND 60 THEN 'Middle Age (40-60)'
                WHEN VOL_AGE >= 60 THEN 'Seniors (60+)'
                ELSE 'Age Information Unavailable' END AS 'age_grouping'
    FROM airtable.FACT_VOLUNTEER_CENTRAL
    WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
    AND VOL_AGE IS NOT NULL
) SELECT age_grouping,
         COUNT(DISTINCT RECORD_ID) AS volunteers_registered
FROM age_group
GROUP BY 1
ORDER BY 2 DESC;

-- current active status with SR among volunteers

SELECT VOL_STATUS AS  Current_Status,
       COUNT(DISTINCT RECORD_ID) AS Volunteers_Registered
FROM airtable.FACT_VOLUNTEER_CENTRAL
WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
GROUP BY 1
ORDER BY 2 DESC;

-- program sign-ups on an individual volunteer level

WITH program_interest AS(
    SELECT vol.ID,
       vol.RECORD_ID,
       vol.VOL_STATUS,
       vol.VOL_FIRST_NAME,
       vol.VOL_LAST_NAME,
       programs.PGM_DELIVERY AS Delivery,
       programs.PGM_KITCHEN AS Kitchen,
       programs.PGM_URBAN_AGRICULTURE AS Urban_Agriculture,
       programs.PGM_FARM AS Farming,
       programs.PGM_CARING_CALLS AS Caring_Calls,
       programs.PGM_VEGGIE_BASKETS AS Veggie_Baskets,
       programs.PGM_EVENTS AS Events,
       programs.PGM_COLLECTIVES AS Collectives
    FROM airtable.FACT_VOLUNTEER_CENTRAL vol
    LEFT JOIN DIM_VOLUNTEER_PROGRAM_PREFERENCES programs
        ON programs.RECORD_ID = vol.RECORD_ID
    WHERE YEAR(vol.VOL_CREATED) = YEAR(CURRENT_DATE)
) SELECT SUM(Delivery) AS Meals_on_Wheels_Delivery,
       SUM(Kitchen) AS Meals_on_Wheels_Kitchen,
       SUM(Urban_Agriculture) AS Urban_Agriculture,
       SUM(Farming) AS Farming,
       SUM(Caring_Calls) AS Caring_Calls,
       SUM(Veggie_Baskets) AS Veggie_Baskets,
       SUM(Events) AS Events,
       SUM(Collectives) AS Collectives
FROM program_interest;



-- Count by program of choice

WITH program_interest AS(
    SELECT vol.ID,
       vol.RECORD_ID,
       vol.VOL_STATUS,
       vol.VOL_FIRST_NAME,
       vol.VOL_LAST_NAME,
       programs.PGM_DELIVERY AS Delivery,
       programs.PGM_KITCHEN AS Kitchen,
       programs.PGM_URBAN_AGRICULTURE AS Urban_Agriculture,
       programs.PGM_FARM AS Farming,
       programs.PGM_CARING_CALLS AS Caring_Calls,
       programs.PGM_VEGGIE_BASKETS AS Veggie_Baskets,
       programs.PGM_EVENTS AS Events,
       programs.PGM_COLLECTIVES AS Collectives
    FROM airtable.FACT_VOLUNTEER_CENTRAL vol
    LEFT JOIN DIM_VOLUNTEER_PROGRAM_PREFERENCES programs
        ON programs.RECORD_ID = vol.RECORD_ID
    WHERE YEAR(vol.VOL_CREATED) = YEAR(CURRENT_DATE)
), number_of_progs AS(
SELECT RECORD_ID,
       Delivery + Kitchen + `Urban Agriculture` + Farming + `Caring Calls` + `Veggie Baskets` + Events + Collectives AS Number_of_Programs
FROM program_interest),
    progs_aggregated AS (
        SELECT *,
               CASE WHEN Number_of_Programs = 1 THEN 'Only One Program'
                    WHEN Number_of_Programs > 1 THEN 'Multiple Programs'
                    END AS prog_class
        FROM number_of_progs
    )
SELECT prog_class,
       COUNT(DISTINCT RECORD_ID) AS registrations
FROM progs_aggregated
WHERE prog_class IN ('Only One Program', 'Multiple Programs')
GROUP BY 1;


-- Volunteer delivery preferences


  WITH this_year_vols AS (
  SELECT *
  FROM airtable.FACT_VOLUNTEER_CENTRAL
  WHERE YEAR(VOL_CREATED) = YEAR(CURRENT_DATE)
  SELECT SUM(DEL_HAVE_A_CAR) AS have_a_car,
        SUM(DEL_BY_BIKE) AS by_bike,
        SUM(DEL_AGE_GEQ_25) AS age_geq_25,
        SUM(DEL_ACCOUNT_COMMUNAUTO) AS communauto_account,
        SUM(DEL_IN_PAIRS) AS del_in_pairs,
        SUM(DEL_BY_PUBLIC_TRANSIT) AS del_public_transit,
        SUM(DEL_LICENSED_TO_DRIVE) AS licensed_to_drive
  FROM airtable.DIM_VOLUNTEER_DELIVERY_PREFERENCES
  WHERE RECORD_ID IN (SELECT DISTINCT RECORD_ID FROM this_year_vols)



