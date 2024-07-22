---
title: Meals on Wheels Analytics at Santropol Roulant
---

<Details title='About this Dashboard'>
  This dashboard contains metrics pertaining to the Meals on Wheels program run by Santropol Roulant in Montreal, QC. The data comprising this dashboard comes from Sous Chef and Santropol Roulant's volunteer tracking systems.
  Built by Moiz Shaikh and Jared Balakrishnan, graduate students at McGill University.

  Please note that unless explicitly mentioned, all the metrics and visuals are restricted to just the year set in the filter below.
</Details>

<Details title='How to Use this Dashboard'>


  ### Viewing

  In order to view this dashboard, simply navigate to www.santropolroulant.org/mow-analytics.

  To get the numbers from a given visual, simply hover over the visual and the tooltip will show you the values you are looking for.

  If you would like to look at the SQL queries that power the metrics, please click on the three dot menu on the top pane and hit the **Show Queries** button.

  ### Filtering

  This dashboard is designed to provide employees working with the Meals on Wheels Program (MoW) at the Roulant to be able to have access to critical metrics relating to the administration of this program. 
  
  The insights presented here are primarily used to help author the annual letter to benefactors and at the Annual General Meeting (AGM), so the main access pattern for this dashboard is ** *being able to access all of the listed metrics for a particular calendar year* **. 

  Keeping this in mind, the user of this dashboard should pick a year to filter the data by in the next subsection titled *Select a Year to Filter Dashboard By*. The farthest one can go back to is 2017.

  ### Downloading PDFs

  This dashboard can be downloaded in a print-friendly format. To do so, simply click on the three dot menu on the top header of the webpage and click on the **Print PDF** option.

  ### Modifying or Maintaining

  In order to be able to modify the contents of this dashboard (adding KPIs, deleting KPIs) or maintaining the dashboard, you will need to be given access by someone working with the IT team at the Roulant. 

  If you would like to contribute to the development of this project, we would be happy to hear from you. All you need to know in order to contribute to this dashboard is a good handle of SQL (MySQL and DuckDB dialects), Python and a little JavaScript.


</Details>

<Details title='Style Guide'>

The style guide for this dashboard is very minimalist.

### Text

All text in this dashboard is rendered in Black (hex #000000).

### Visuals

Other than heat maps and geographical maps, all visuals are to be filled with the Santropol Burgundy (Hex Code #7C305E).

</Details>

## Select Year to Filter Dashboard By:


<Dropdown name=vol_year title = "Select a Year" defaultValue=2024 hideDuringPrint=false>
    <DropdownOption value=2024/>
    <DropdownOption value=2023/>
    <DropdownOption value=2022/>
    <DropdownOption value=2021/>
    <DropdownOption value=2020/>
    <DropdownOption value=2019/>
    <DropdownOption value=2018/>
    <DropdownOption value=2017/>
</Dropdown>


## Billing



  This section details some of the specifics regarding billing activity for the Meals on Wheels program (MoW) at the Roulant.

  Specifically, the figures shown in the visuals and numbers below are calculated using the amount of money that was charged to the clients receiving meals from the Roulant. 

<Details title = "About (FR)">

  Cette section détaille certains aspects spécifiques de l'activité de facturation pour le programme Meals on Wheels (MoW) au Roulant.


  Plus précisément, les chiffres présentés dans les visuels et les nombres ci-dessous sont calculés en utilisant le montant d'argent facturé aux clients recevant des repas du Roulant.
</Details>


```sql billing_experiment
WITH updated_billing AS (SELECT id,
                                total_amount,
                                billing_year,
                                billing_month,
                                CAST(CONCAT(CAST(billing_year AS INTEGER), '-', LPAD(CAST(billing_month AS INTEGER), 2, '0'), '-01') AS DATE) AS billing_date,
                                created
                         FROM souschef.billing_billing)
SELECT YEAR(billing_date) AS bill_year,
       SUM(total_amount) AS total_billed,
       LAG(SUM(total_amount)) OVER (ORDER BY bill_year) AS prev_year_billing,
       ROUND(100 * (SUM(total_amount) / prev_year_billing - 1),2) AS billing_growth_percent
FROM updated_billing
GROUP BY 1
order by 1 desc
```


```sql total_billed_this_year
SELECT SUM(total_amount) AS total_billed
FROM billing_billing
WHERE billing_year = '${inputs.vol_year.value}'
```

```sql billing_by_year
SELECT billing_year AS year,
       SUM(total_amount) as amount_billed
FROM billing_billing
GROUP BY 1;
```

```sql billing_by_month
  select 
      billing_month as month,
      total_amount as total_billed
  from souschef.billing_billing
  where billing_year = '${inputs.vol_year.value}'
```

<BigValue data ={total_billed_this_year} value = total_billed title = "Total Amount Billed this Year" fmt = "usd0"/>



<Grid cols = 2>
  <BarChart data={billing_by_year} title="Billing by Year" x=year y=amount_billed fillColor = #7C305E/>
  <BarChart data={billing_by_month} title="Billing by Month" x=month y=total_billed fillColor = #7C305E/>
</Grid>

### Change in Billing Trends

<DataTable data = {billing_experiment}/>

<PageBreak/>

## Santropol Roulant Customers - Information


  The section below discusses some key metrics related to the clients receiving meals through the Roulant's Meals on Wheels Program.


<Details title='About (FR)'>

  La section ci-dessous discute de certaines métriques clés relatives aux clients qui reçoivent des repas par le biais du programme Meals on Wheels du Roulant.

</Details>


```sql clients_years
  SELECT YEAR(delivery_date) AS year, COUNT(DISTINCT mc.id) AS clients_served
  FROM order_order orders
  LEFT JOIN souschef.member_client mc
      ON orders.client_id = mc.id
  GROUP BY 1
```

```sql clients_this_year
  SELECT DATE_TRUNC('month', delivery_date) AS month, COUNT(DISTINCT mc.id) AS clients_served
  FROM order_order orders
  LEFT JOIN souschef.member_client mc
      ON orders.client_id = mc.id
  WHERE YEAR(orders.delivery_date) = '${inputs.vol_year.value}'
  GROUP BY 1
```

<Grid cols = 2>
  <BarChart data={clients_years} title="Clients serviced Over the Years" x=year y=clients_served fillColor = #7C305E/>
  <BarChart data={clients_this_year} title="Clients serviced this Year" x=month y=clients_served fillColor = #7C305E/>
</Grid>


```sql clients_orders_combined
  SELECT orders.id AS order_id,
        orders.creation_date AS order_creation_date,
        orders.delivery_date AS order_delivery_date,
        orders.status AS order_status,
        orders.client_id             AS client_id,
        clients.billing_member_id    AS client_billing_id,
        clients.birthdate            AS birthdate,
        YEAR(CURRENT_DATE) - YEAR(clients.birthdate) AS client_age,
        clients.gender               AS client_gender,
        clients.status               AS client_status,
        clients.language             AS client_primary_language,
        clients.delivery_type        AS client_delivery_type,
        clients.billing_payment_type AS client_payment_method,
        clients.rate_type            AS client_rate_type
  FROM souschef.order_order orders
  LEFT JOIN souschef.member_client clients
    ON clients.id = orders.client_id
  WHERE order_status IN ('D', 'N')
  AND YEAR(order_delivery_date) = '${inputs.vol_year.value}'
```

```sql total_clients_ever_served
  SELECT COUNT(DISTINCT id) AS customers_served_till_date
  FROM souschef.member_client
```

```sql clients_served_current_year
SELECT COUNT(DISTINCT client_id) AS clients_serviced
FROM ${clients_orders_combined}
```

```sql new_clients
WITH client_delivery_date_ranked as (
    SELECT *,
           RANK() OVER(PARTITION BY client_id ORDER BY delivery_date ASC) AS client_appearance_rank
    FROM souschef.order_order
    WHERE status IN ('D', 'N')
)
SELECT COUNT(DISTINCT client_id) AS new_clients
FROM client_delivery_date_ranked
WHERE client_appearance_rank = 1
AND YEAR(delivery_date) = '${inputs.vol_year.value}';
```

```sql lapsed_clients
WITH ranked_deliveries AS (
SELECT client_id,
       order_delivery_date,
       RANK() OVER(PARTITION BY client_id ORDER BY order_delivery_date DESC) AS delivery_date_rank
FROM ${clients_orders_combined}),
    ranked_deliveries_six_mo AS (
SELECT *,
       order_delivery_date + INTERVAL 180 DAY AS six_month_deadline
FROM ranked_deliveries
WHERE delivery_date_rank = 1)
SELECT COUNT(DISTINCT client_id) AS lapsed_customers
FROM ranked_deliveries_six_mo
WHERE YEAR(six_month_deadline) = '${inputs.vol_year.value}'
AND six_month_deadline < NOW();
```

```sql reg_clients
SELECT COUNT(DISTINCT client_id) AS regular_clients
FROM ${clients_orders_combined}
WHERE client_delivery_type = 'O'
```

```sql epi_clients
SELECT COUNT(DISTINCT client_id) AS episodic_clients
FROM ${clients_orders_combined}
WHERE client_delivery_type = 'E'
```

```sql low_income_clients
  SELECT COUNT(DISTINCT client_id) AS low_income_clients
  FROM ${clients_orders_combined}
  WHERE client_rate_type = 'low income'
```

```sql clients_over_65
SELECT COUNT(DISTINCT client_id) AS clients_over_65
FROM ${clients_orders_combined}
WHERE client_age >= 65
```

```sql clients_over_80
SELECT COUNT(DISTINCT client_id) AS clients_over_80
FROM ${clients_orders_combined}
WHERE client_age >= 80
```

```sql total_deliveries_completed
SELECT 0 AS deliveries_completed_till_date
FROM ${clients_orders_combined}
```

```sql client_avg_age
-- code to compute the average age of clients receiving meals this year
SELECT AVG(client_age) AS average_client_age
FROM ${clients_orders_combined}
```

```sql client_median_age
-- median age of clients receiving meals this year
SELECT MEDIAN(client_age) AS median_client_age
FROM ${clients_orders_combined}
```

```sql anglophone_clientele
  SELECT COUNT(DISTINCT client_id) AS anglophone_clients
  FROM ${clients_orders_combined}
  WHERE client_primary_language = 'en'
```

```sql francophone_clientele
  SELECT COUNT(DISTINCT client_id) AS francophone_clients
  FROM ${clients_orders_combined}
  WHERE client_primary_language = 'fr'
```

```sql client_gender_split_f
SELECT COUNT(DISTINCT client_id) AS female_clients
FROM ${clients_orders_combined}
WHERE client_gender = 'F'
```

```sql client_gender_split_m
SELECT COUNT(DISTINCT client_id) AS male_clients
FROM ${clients_orders_combined}
WHERE client_gender = 'M'
```


<Grid cols=4>
    <BigValue data ={clients_served_current_year} value = clients_serviced fmt = "#,##0" title = "Clients Serviced this Year"/>
    <BigValue data ={new_clients} value = new_clients fmt = "#,##0" title = "New Clients Added this Year"/>
    <BigValue data ={lapsed_clients} value = lapsed_customers fmt = "#,##0" title = "Clients Lapsed this Year"/>
    <BigValue data ={low_income_clients} value = low_income_clients fmt = "#,##0"/>
    <BigValue data ={reg_clients} value = regular_clients fmt = "#,##0"/>
    <BigValue data ={epi_clients} value = episodic_clients fmt = "#,##0"/>
    <BigValue data ={clients_over_65} value = clients_over_65 fmt = "#,##0"/>
    <BigValue data ={clients_over_80} value = clients_over_80 fmt = "#,##0"/>
    <BigValue data ={client_avg_age} value = average_client_age fmt = "#,##0"/>
    <BigValue data ={client_median_age} value = median_client_age fmt = "#,##0"/>
    <BigValue data ={anglophone_clientele} value = anglophone_clients fmt = "#,##0"/>
    <BigValue data ={francophone_clientele} value = francophone_clients fmt = "#,##0"/>
    <BigValue data ={client_gender_split_f} value = female_clients fmt = "#,##0"/>
    <BigValue data ={client_gender_split_m} value = male_clients fmt = "#,##0"/>
</Grid>

<PageBreak/>

## Orders and Deliveries

  This section contains metrics related to orders and deliveries made and received by the Roulant's Meals on Wheels clients. There is also a discussion of the methods of delivery used by the Roulant's volunteers.


<Details title = "About (FR)">
  Cette section contient des métriques relatives aux commandes et aux livraisons faites et reçues par les clients du programme Meals on Wheels de Santropol Roulant. Il y a aussi une discussion sur les méthodes de livraison utilisées par les bénévoles de Santropol Roulant.
</Details>

```sql orders_placed_this_year
SELECT COUNT(id) AS meals_ordered
FROM souschef.order_order
WHERE YEAR(delivery_date) = '${inputs.vol_year.value}'
```

```sql orders_delivered_this_year
SELECT COUNT(DISTINCT id) AS meals_delivered
FROM souschef.order_order
WHERE YEAR(delivery_date) = '${inputs.vol_year.value}'
AND status IN ('D', 'N');
```

```sql orders_canceled_this_year
SELECT COUNT(DISTINCT id) AS meal_orders_canceled
FROM souschef.order_order
WHERE YEAR(delivery_date) = '${inputs.vol_year.value}'
AND status = 'C';
```

```sql weekly_deliveries_aggregate
WITH weekly_deliveries AS (SELECT delivery_date,
                                  WEEK(delivery_date) AS delivery_week,
                                  client_id
                           FROM order_order
                           WHERE status IN ('D', 'N')
                           AND YEAR(delivery_date) = '${inputs.vol_year.value}')
SELECT delivery_week,
       COUNT(DISTINCT client_id) AS meal_deliveries
FROM weekly_deliveries
GROUP BY 1
```

```sql average_weekly_deliveries
SELECT AVG(meal_deliveries) AS average_meals_delivered_per_day
FROM ${weekly_deliveries_aggregate}
```

```sql total_deliveries_completed
SELECT CAST(COUNT(DISTINCT id) AS INTEGER) AS deliveries_completed_till_date
FROM member_deliveryhistory
```

```sql all_routes
SELECT name AS route_name,
       description AS route_description,
       vehicle AS route_serviced_by,
       (LENGTH(REPLACE(client_id_sequence, ' ', '')) -
                                        LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) +
                                        1) AS clients_along_route
FROM member_route
LIMIT 40;
```

```sql orders_by_year
  SELECT 
    YEAR(delivery_date) AS year,
    COUNT(DISTINCT id) AS orders_delivered
  FROM souschef.order_order
  WHERE status IN ('D', 'N')
  GROUP BY all
```

```sql orders_by_month
  SELECT 
    DATE_TRUNC('month', delivery_date) AS month,
    COUNT(DISTINCT id) AS orders_delivered
  FROM souschef.order_order
  WHERE year(delivery_date) = '${inputs.vol_year.value}'
  AND status IN ('D', 'N')
  GROUP BY all
```

```sql orders_del_methods
 WITH date_method_meals_delivered AS (
    SELECT id,
           date,
           vehicle,
           client_id_sequence AS client_list,
           (LENGTH(REPLACE(client_id_sequence, ' ', '')) -
            LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) + 1) AS number_of_clients
    FROM member_deliveryhistory
)
SELECT 
    SUM(CASE WHEN vehicle = 'walking' THEN number_of_clients ELSE 0 END) AS by_foot,
    SUM(CASE WHEN vehicle = 'driving' THEN number_of_clients ELSE 0 END) AS by_car,
    SUM(CASE WHEN vehicle = 'cycling' THEN number_of_clients ELSE 0 END) AS by_bike
FROM date_method_meals_delivered
WHERE YEAR(date) = '${inputs.vol_year.value}';
```

<Grid cols=4>
    <BigValue data ={orders_placed_this_year} value = meals_ordered fmt="#,##0"/>
    <BigValue data ={orders_delivered_this_year} value = meals_delivered fmt="#,##0"/>
    <BigValue data ={orders_canceled_this_year} value = meal_orders_canceled/>
    <BigValue data ={average_weekly_deliveries} value = average_meals_delivered_per_day/>
    <BigValue data ={orders_del_methods} value = by_car fmt = "#,##0"/>
    <BigValue data ={orders_del_methods} value = by_foot fmt = "#,##0"/>
    <BigValue data ={orders_del_methods} value = by_bike fmt = "#,##0"/>
</Grid>



### Orders Delivered 

  The below shown visuals capture the number of orders delivered by the Roulant per year (historically) and the number of orders delivered by the Roulant per month (restricted to the selected year) respectively.

<Details title = "About this Visual (FR)">
  Les visuels ci-dessous montrent le nombre de repas livrés par le Roulant par année (historiquement) et le nombre de repas livrés par le Roulant par mois (limité à l'année en cours) respectivement.
</Details>


<Grid cols = 2>
  <BarChart data = {orders_by_year} title = "Orders Delivered by Year" x = year y = orders_delivered fillColor = #7C305E/>
  <BarChart data = {orders_by_month} title = "Orders Delivered by Month" x = month y = orders_delivered fillColor = #7C305E/>
</Grid>

### Meal Delivery Activity Heatmap

  This visual allows the reader to hover along the heatmap to deduce the number of meals that were delivered on a given day for the current year.

<Details title = "About (FR)">

  Ce visuel permet au lecteur de survoler la carte thermique pour déduire le nombre de repas qui ont été livrés un jour donné de l'année en cours.

</Details>

```sql delivery_heatmap
SELECT
    date,
    SUM((LENGTH(REPLACE(client_id_sequence, ' ', '')) - LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) + 1)) AS meals_delivered
FROM
    member_deliveryhistory
WHERE YEAR(date) = '${inputs.vol_year.value}'
GROUP BY
    1
```
<CalendarHeatmap 
    data={delivery_heatmap}
    date=date
    value=meals_delivered
    title="Deliveries - Heatmap"
    subtitle="Orders Delivered"
/>

<PageBreak/>

### All Routes

Listed here are the currently active meal delivery routes, the various delivery methods that service these routes and the number of clients that are serviced along these routes:

<Details title = "About (FR)">

  Les itinéraires de livraison de repas actuellement actifs, les différents moyens de livraison qui desservent ces itinéraires et le nombre de clients desservis le long de ces itinéraires sont listés ici :

</Details>

<DataTable data = {all_routes}/>

### Route Rankings


```sql route_rankings
WITH date_route_clients AS (SELECT date,
                                   route_id,
                                   SUM((LENGTH(REPLACE(client_id_sequence, ' ', '')) -
                                        LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) +
                                        1)) AS entry_count
                            FROM souschef.member_deliveryhistory
                            WHERE YEAR(date) = '${inputs.vol_year.value}'
                            GROUP BY 1, 2
                            ORDER BY 1 DESC)
SELECT routes.name,
       SUM(entry_count) AS number_of_meals_delivered
FROM date_route_clients
LEFT JOIN souschef.member_route routes
ON routes.id = date_route_clients.route_id
GROUP BY 1
ORDER BY 2 DESC
```

The meal delivery routes are ranked below in terms of the number of meal deliveries that were made along each of them in the selected calendar year:

<Details title = "About (FR)">

Les itinéraires de livraison de repas sont classés ci-dessous en fonction du nombre de livraisons de repas effectuées le long de chacun d'eux pour l'année civile sélectionnée.

</Details>


<DataTable data = {route_rankings}/>


<PageBreak/>


## CLSC Partnerships


  The table displayed below lists all of the unique Centre Local de Services Communautaires (CLSCs), which are free clinics and hospitals run and maintained by the Québec government.

  For a client to be eligible to receive meals from the Roulant's Meals on Wheels program, they need to be referred to the Roulant by a physician or care worker affiliated with a CLSC.


<Details title='About this Table (FR)'>
  Le tableau ci-dessous liste tous les Centres Locaux de Services Communautaires (CLSC) uniques, qui sont des cliniques et hôpitaux gratuits gérés et maintenus par le gouvernement du Québec.

  Pour qu'un client soit admissible à recevoir des repas du programme Meals on Wheels du Roulant, il doit être référé au Roulant par un médecin ou un travailleur de la santé affilié à un CLSC.
</Details>

```sql clsc_listing
  SELECT DISTINCT REPLACE(REPLACE(work_information, '-', ''), '/', '') AS "CLSC"
  FROM member_member
  WHERE work_information LIKE 'CLSC%'
  ORDER BY 1 ASC;
```

<DataTable data={clsc_listing}/>

# Volunteering at the Roulant this Year

The visuals and metrics that follow are related to volunteering at the Roulant.

### Trends in Volunteer Registration 

```sql yearly_registrations
  SELECT YEAR(VOL_CREATED) AS year,
  COUNT(DISTINCT RECORD_ID) AS volunteers_registered
  FROM airtable.FACT_VOL_CENTRAL
  GROUP BY 1
```

  The first step to volunteering at the Roulant is filling out an Airtable form listed on their website. 
  
  The below shown charts summarize yearly new volunteer registrations from the inception of the Airtable form and the monthly trend in new volunteer registrations for the current year respectively.


<Details title='About this Visual (FR)'>
  La première étape pour faire du bénévolat au Roulant est de remplir un formulaire Airtable disponible sur leur site web. Les graphiques ci-dessous résument les nouvelles inscriptions de bénévoles annuelles depuis la création du formulaire Airtable et la tendance mensuelle des nouvelles inscriptions de bénévoles pour l'année en cours, respectivement.
</Details>


```sql monthly_registrations
  SELECT DATE_TRUNC('month', VOL_CREATED) AS month,
  COUNT(DISTINCT id) AS volunteers_registered
  FROM airtable.FACT_VOL_CENTRAL
  WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
  GROUP BY 1
```

<Grid cols = 2>
<BarChart data={yearly_registrations} title="New Volunteer Registration by Year (Historical)" x=year y=volunteers_registered fillColor = #7C305E/>
<BarChart data={monthly_registrations} title="New Volunteer Registration by Month this Year" x=month y=volunteers_registered fillColor = #7C305E/>
</Grid>

<PageBreak/>

### Volunteer Registration in Numbers
<Details title='About these Numbers (EN)'>

    ### Volunteers Registered

    Defined as the number of volunteers that filled out the registration form via Airtable for the current year till date (YTD)

    ### Average Age

    Defined as the average age of new volunteer registrations for the current year till date (YTD).

    ### Young Volunteers Registered

    Number of new volunteers whose age falls between 12 and 17 years of age.

    ### Adult Volunteers Registered

    Number of new volunteers whose age falls between 18 and 59 years of age.

    ### Senior Volunteers Registered

    Number of new volunteers older than 60 years old.

    ### School Mandated Registrations

    Number of new volunteers who have signed up to volunteer to fulfil a mandatory requirement set by an educational institution.

    ### Community or Paid Registrations

    Number of new volunteers who are required to volunteer to fulfil a number of community service hours or are being paid to volunteer at the Roulant.

</Details>

<Details title='About these Numbers (FR)'>

    ### Volunteers Registered

    Défini comme le nombre de bénévoles ayant rempli le formulaire d'inscription via Airtable pour l'année en cours jusqu'à présent (YTD).

    ### Average Age

    Défini comme l'âge moyen des nouvelles inscriptions de bénévoles pour l'année en cours jusqu'à présent (YTD).

    ### Young Volunteers Registered

    Nombre de nouveaux bénévoles dont l'âge est compris entre 12 et 17 ans.

    ### Adult Volunteers Registered

    Nombre de nouveaux bénévoles dont l'âge est compris entre 18 et 59 ans.

    ### Senior Volunteers Registered

    Nombre de nouveaux bénévoles âgés de plus de 60 ans.

    ### School Mandated Registrations

    Nombre de nouveaux bénévoles qui se sont inscrits pour satisfaire une obligation imposée par un établissement scolaire.

    ### Community or Paid Registrations

    Nombre de nouveaux bénévoles qui doivent faire du bénévolat pour accomplir un certain nombre d'heures de service communautaire ou qui sont payés pour faire du bénévolat au Roulant.

</Details>


```sql vol_head
SELECT COUNT(DISTINCT RECORD_ID) AS volunteers_registered
FROM airtable.FACT_VOL_CENTRAL
WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
```

```sql avg_age
SELECT CAST(AVG(VOL_AGE) AS INTEGER) AS average_age
FROM airtable.FACT_VOL_CENTRAL
WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
LIMIT 50;
```

```sql young_vols
SELECT COUNT(DISTINCT RECORD_ID) AS young_volunteers_registered
FROM airtable.FACT_VOL_CENTRAL
WHERE VOL_AGE BETWEEN 12 AND 17
AND YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
```

```sql vols_18_59
SELECT COUNT(DISTINCT RECORD_ID) AS adult_volunteers_registered
FROM airtable.FACT_VOL_CENTRAL
WHERE VOL_AGE BETWEEN 18 AND 59
AND YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
```

```sql senior_vols
SELECT COUNT(DISTINCT RECORD_ID) AS senior_volunteers_registered
FROM airtable.FACT_VOL_CENTRAL
WHERE VOL_AGE >= 60
AND YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
```

```sql heures_scolaires
SELECT COUNT(DISTINCT RECORD_ID) AS School_Mandated_Registrations
FROM airtable.FACT_VOL_CENTRAL
WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
AND VOL_SCHOOL_HOURS_FLAG = 'Yes'
```

```sql community_groups
SELECT COUNT(DISTINCT RECORD_ID) AS Paid_or_Community_Service_Registrations
FROM airtable.FACT_VOL_CENTRAL
WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
AND VOL_COMMUNITY_PAID_FLAG = 'Yes'
```

```sql linguistic_background
SELECT COALESCE(VOL_PRIMARY_LANGUAGE, 'Information not Provided') AS primary_language,
       COUNT(DISTINCT RECORD_ID) AS volunteers_registered
FROM airtable.FACT_VOL_CENTRAL
WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
GROUP BY 1
ORDER BY 2 DESC
```

```sql kitchen_experience
SELECT COUNT(DISTINCT RECORD_ID) AS Volunteers_with_Prior_Kitchen_Experience
FROM FACT_VOL_CENTRAL
WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
AND VOL_KITCHEN_EXPERIENCE = 'Yes'
```

```sql detailed_age_breakdown
WITH age_group AS (
    SELECT RECORD_ID,
           CASE WHEN VOL_AGE BETWEEN 12 AND 17 THEN 'Minors (< 18)'
                WHEN VOL_AGE BETWEEN 18 AND 25 THEN 'Young Adults (18-25)'
                WHEN VOL_AGE BETWEEN 25 AND 40 THEN 'Adults (25-40)'
                WHEN VOL_AGE BETWEEN 40 AND 60 THEN 'Middle Age (40-60)'
                WHEN VOL_AGE >= 60 THEN 'Seniors (60+)'
                ELSE 'Age Information Unavailable' END AS 'age_grouping'
    FROM airtable.FACT_VOL_CENTRAL
    WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
    AND VOL_AGE IS NOT NULL
) SELECT age_grouping,
         COUNT(DISTINCT RECORD_ID) AS volunteers_registered
FROM age_group
GROUP BY 1
ORDER BY 2 DESC
```


```sql current_volunteer_status_breakdown
SELECT VOL_STATUS AS  Current_Status,
       COUNT(DISTINCT RECORD_ID) AS Volunteers_Registered
FROM airtable.FACT_VOL_CENTRAL
WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}'
GROUP BY 1
ORDER BY 2 DESC
```

<Grid cols=4>
    <BigValue data ={vol_head} value = volunteers_registered/>
    <BigValue data ={avg_age} value = average_age/>
    <BigValue data ={young_vols} value = young_volunteers_registered/>
    <BigValue data ={vols_18_59} value = adult_volunteers_registered/>
    <BigValue data ={senior_vols} value = senior_volunteers_registered/>
    <BigValue data ={heures_scolaires} value = School_Mandated_Registrations/>
    <BigValue data ={community_groups} value = Paid_or_Community_Service_Registrations/>
    <BigValue data ={kitchen_experience} value = Volunteers_with_Prior_Kitchen_Experience/>
</Grid>

### Volunteering Information Sessions

All prospective volunteers at the Roulant are required to attend a Welcome Session before they can start exploring the opportunities available to them via the Roulant. Here is a summary of the number of welcome sessions held in the last 4 years, along with the number of registrants for whom attendance information is available:

<Details title = "About(FR)">

Tous les bénévoles potentiels du Roulant doivent assister à une Welcome Session avant de pouvoir commencer à explorer les opportunités qui leur sont offertes via le Roulant. Voici un résumé du nombre de Welcome Sessions tenues au cours des 4 dernières années, ainsi que le nombre d'inscrits pour lesquels des informations de présence sont disponibles :

</Details>

```sql info_sessions
SELECT YEAR(VOL_WELCOME_SESSION_DATE) AS year,
       COUNT(DISTINCT VOL_WELCOME_SESSION_DATE) AS welcome_info_sessions,
       COUNT(DISTINCT RECORD_ID) AS number_of_attendees
FROM airtable.FACT_VOL_CENTRAL
WHERE year IS NOT NULL
GROUP BY 1
ORDER BY 1 DESC
```

<DataTable data={info_sessions}/>


#### Language Demographics

This table contains a split of new volunteer registrations according to their primary language.

<Details title = "About (FR)">
Ce tableau contient une répartition des nouvelles inscriptions de bénévoles selon leur langue principale.
</Details>


<DataTable data={linguistic_background}/>

<PageBreak/>

#### Age-Based Split of this year's registrations

Below listed is a more-specific breakdown of this year's volunteer registrations by age group:

<Details title = "About (FR)">
  Vous trouverez ci-dessous une répartition plus détaillée des inscriptions de bénévoles de cette année par tranche d'âge :
</Details>

<DataTable data={detailed_age_breakdown}/>

### Current Standing of Roulant Volunteers

Not all volunteers are created equal! Simply signing up to volunteer at the Roulant is not enough. Volunteers are required to go through their mandatory sessions and be listed as active in order to be able to take up any volunteering shifts.

The current standing of this year's new volunteer registrations are shown below:

<Details title = "About (FR)">


Tous les bénévoles ne sont pas égaux ! Il ne suffit pas de simplement s'inscrire pour faire du bénévolat au Roulant. Les bénévoles doivent suivre leurs sessions obligatoires et être inscrits comme actifs pour pouvoir prendre des créneaux de bénévolat.


L'état actuel des nouvelles inscriptions de bénévoles de cette année est présenté ci-dessous :

</Details>


<DataTable data={current_volunteer_status_breakdown}/>


<PageBreak/>

### Volunteer Registrations by Program

When signing up to volunteer at the Roulant, volunteers are asked to mark their interest in each of the programs offered by the Roulant. The interest among the various programs among the new registrations this year are as shown below:

<Details title = "About (FR)">

  Lors de leur inscription pour faire du bénévolat au Roulant, les bénévoles sont invités à indiquer leur intérêt pour chacun des programmes proposés par le Roulant. L'intérêt pour les différents programmes parmi les nouvelles inscriptions de cette année est présenté ci-dessous :

</Details>

```sql volunteer_interests
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
    FROM FACT_VOL_CENTRAL vol
    LEFT JOIN DIM_VOL_PGM_PREFERENCES programs
        ON programs.RECORD_ID = vol.RECORD_ID
    WHERE YEAR(vol.VOL_CREATED) = '${inputs.vol_year.value}'
) SELECT SUM(Delivery) AS Meals_on_Wheels_Delivery,
       SUM(Kitchen) AS Meals_on_Wheels_Kitchen,
       SUM(Urban_Agriculture) AS Urban_Agriculture,
       SUM(Farming) AS Farming,
       SUM(Caring_Calls) AS Caring_Calls,
       SUM(Veggie_Baskets) AS Veggie_Baskets,
       SUM(Events) AS Events,
       SUM(Collectives) AS Collectives
FROM program_interest
```

```sql num_progs
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
    FROM FACT_VOL_CENTRAL vol
    LEFT JOIN DIM_VOL_PGM_PREFERENCES programs
        ON programs.RECORD_ID = vol.RECORD_ID
    WHERE YEAR(vol.VOL_CREATED) = '${inputs.vol_year.value}'
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
GROUP BY 1
```

<Grid cols=4>
    <BigValue data ={volunteer_interests} value = Meals_on_Wheels_Delivery/>
    <BigValue data ={volunteer_interests} value = Meals_on_Wheels_Kitchen/>
    <BigValue data ={volunteer_interests} value = Urban_Agriculture/>
    <BigValue data ={volunteer_interests} value = Farming/>
    <BigValue data ={volunteer_interests} value = Caring_Calls/>
    <BigValue data ={volunteer_interests} value = Veggie_Baskets/>
    <BigValue data ={volunteer_interests} value = Events/>
    <BigValue data ={volunteer_interests} value = Collectives/>
</Grid>

```sql multi_prog_interest
WITH vol_num_progs AS (
SELECT id, record_id, VOL_PROGRAMS,
       CASE WHEN VOL_PROGRAMS LIKE '%,%' THEN 'Multiple Programs' ELSE 'Only One Program' END AS Number_of_Programs
FROM airtable.FACT_VOL_CENTRAL
WHERE VOL_PROGRAMS IS NOT NULL
AND YEAR(VOL_CREATED) = '${inputs.vol_year.value}')
SELECT Number_of_Programs,
       COUNT(DISTINCT RECORD_ID) AS Registrations
FROM vol_num_progs
GROUP BY 1
```

<DataTable data={multi_prog_interest}/>



### Delivery Shift Preferences

Volunteers looking to deliver meals as part of the Roulant's MoW program can do so by foot, bike, public transit or car. The number of new volunteer registrants from this year interested in delivering by these methods are:

<Details title = "About (FR)">

  Les bénévoles souhaitant livrer des repas dans le cadre du programme Meals on Wheels (MoW) du Roulant peuvent le faire à pied, à vélo, en transport en commun ou en voiture. Le nombre de nouveaux bénévoles inscrits cette année intéressés par ces méthodes de livraison est le suivant :

</Details>

```sql del_prefs
  WITH this_year_vols AS (
  SELECT *
  FROM airtable.FACT_VOL_CENTRAL
  WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}')
  SELECT SUM(DEL_HAVE_A_CAR) AS have_a_car,
        SUM(DEL_BY_BIKE) AS by_bike,
        SUM(DEL_AGE_GEQ_25) AS age_geq_25,
        SUM(DEL_ACCOUNT_COMMUNAUTO) AS communauto_account,
        SUM(DEL_IN_PAIRS) AS del_in_pairs,
        SUM(DEL_BY_PUBLIC_TRANSIT) AS del_public_transit,
        SUM(DEL_LICENSED_TO_DRIVE) AS licensed_to_drive
  FROM airtable.DIM_VOL_DELIVERY_PREFERENCES
  WHERE RECORD_ID IN (SELECT DISTINCT RECORD_ID FROM this_year_vols)
```

<Grid cols=4>
    <BigValue data ={del_prefs} value = have_a_car title = "By Car"/>
    <BigValue data ={del_prefs} value = by_bike title = "By Bicycle"/>
    <BigValue data ={del_prefs} value = del_in_pairs title = "In Pairs"/>
    <BigValue data ={del_prefs} value = del_public_transit title = "By Public Transit"/>
    <BigValue data ={del_prefs} value = licensed_to_drive title = "Licensed to Drive"/>
</Grid>

### Kitchen Shift Preferences

Below listed is the popularity of the various kitchen shifts available to interested volunteers:

<Details title = "About (FR)">

  La popularité des différents créneaux de cuisine disponibles pour les bénévoles intéressés est listée ci-dessous :

</Details>


```sql dim_kitchen
SELECT *
FROM souschef.DIM_KITCHEN_SHIFT
ORDER BY registrations DESC
```

<DataTable data = {dim_kitchen}/>

## Volunteer Skills

During the registration process, Roulant volunteers are asked to indicate if they are in possession of skills that are particularly in demand. Below, we can see the number of new prospective volunteers who have marked themselves as being skilled in:

<Details title = "About (FR)">

  Lors du processus d'inscription, les bénévoles du Roulant sont invités à indiquer s'ils possèdent des compétences particulièrement recherchées. Ci-dessous, nous pouvons voir le nombre de nouveaux bénévoles potentiels qui se sont identifiés comme étant compétents dans :


</Details>

```sql vol_skills
SELECT SUM(SKILLS_DATA_ENTRY) AS Data_Entry,
       SUM(SKILLS_TRANSLATION) AS Translation,
       SUM(SKILLS_PHOTOGRAPHY) AS Photography,
       SUM(SKILLS_OTHER) AS Other_Skills,
       SUM(SKILLS_GRAPHIC_DESIGN) AS Graphic_Design,
       SUM(SKILLS_FUNDRAISING) AS Fundraising,
       SUM(SKILLS_EVENTS) AS Event_Management
FROM airtable.DIM_VOL_SKILLS
WHERE RECORD_ID IN (SELECT DISTINCT RECORD_ID FROM airtable.FACT_VOL_CENTRAL WHERE YEAR(VOL_CREATED) = '${inputs.vol_year.value}')
```



<Grid cols=3>
    <BigValue data ={vol_skills} value = Data_Entry title = "Data Entry"/>
    <BigValue data ={vol_skills} value = Translation title = "Translation"/>
    <BigValue data ={vol_skills} value = Photography title = "Photography"/>
    <BigValue data ={vol_skills} value = Graphic_Design title = "Graphic Design"/>
    <BigValue data ={vol_skills} value = Fundraising title = "Fundraising"/>
    <BigValue data ={vol_skills} value = Event_Management title = "Event Management"/>
</Grid>


### Volunteering Hours

<Alert status = "danger">

  These are future state metrics, and cannot be calculated until after the new Volunteering web application goes live and collects data.

</Alert>

<Alert status = "warning">

  The values from 2020-2023 were synced into a MySQL database table because of which information for that time period is available. However, to fully automate this feature, the Volunteering web app will need to be live. So it is advised not to use this as a source of truth until the fixes are made.

</Alert>

Below listed is the information regarding the number of volunteering hours that were spread across the Roulant's various initiatives:

```sql total_hours_sum
SELECT YEAR, PROGRAM, HOURS
FROM airtable.Vol_Hours
WHERE YEAR = '${inputs.vol_year.value}'
```

```sql total_hours
SELECT HOURS
FROM ${total_hours_sum}
WHERE program = 'All Programs'
```

```sql total_hours_k
SELECT HOURS
FROM ${total_hours_sum}
WHERE program = 'Kitchen Shifts'
```

```sql total_hours_d
SELECT HOURS
FROM ${total_hours_sum}
WHERE program = 'Delivery Shifts'
```

```sql total_hours_mow_client_Events
SELECT HOURS
FROM ${total_hours_sum}
WHERE program = 'MoW Client Events'
```

```sql total_hours_other
SELECT HOURS
FROM ${total_hours_sum}
WHERE program = 'Other Events'
```


<Grid cols=3>
    <BigValue data ={total_hours} value = HOURS title = "All Programs" fmt = "#,##0" />
    <BigValue data ={total_hours_k} value = HOURS title = "MoW - Kitchen" fmt = "#,##0"/>
    <BigValue data ={total_hours_d} value = HOURS title = "MoW - Deliveries" fmt = "#,##0"/>
    <BigValue data ={total_hours_mow_client_Events} value = HOURS title = "MoW - Client Events" fmt = "#,##0"/>
    <BigValue data ={total_hours_other} value = HOURS title = "Others" fmt = "#,##0"/>
</Grid>


### Volunteering Spots


Below listed is the information regarding the number of volunteering spots that were filled across the Roulant's various initiatives:

```sql total_spots
SELECT YEAR, PROGRAM, SPOTS_FILLED
FROM airtable.VOL_SPOTS
WHERE YEAR = '${inputs.vol_year.value}'
```

```sql total_spots_all
SELECT 5757 as SPOTS_FILLED
FROM ${total_spots}
WHERE program = 'Kitchen' OR program = 'Delivery'
```

```sql total_spots_k
SELECT SPOTS_FILLED
FROM ${total_spots}
WHERE program = 'Kitchen'
```

```sql total_spots_d
SELECT SPOTS_FILLED
FROM ${total_spots}
WHERE program = 'Delivery'
```


<Grid cols=3>
    <BigValue data ={total_spots_all} value = SPOTS_FILLED title = "All Programs" fmt = "#,##0" />
    <BigValue data ={total_spots_k} value = SPOTS_FILLED title = "MoW - Kitchen" fmt = "#,##0"/>
    <BigValue data ={total_spots_d} value = SPOTS_FILLED title = "MoW - Deliveries" fmt = "#,##0"/>
</Grid>
