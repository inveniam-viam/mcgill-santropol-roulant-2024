-- SQL Queries to generate client-facing metrics from Sous Chef are listed below:

-- If you ever see a query that has YEAR(column_name) = YEAR(CURRENT_DATE)

-- On Evidence, the filter selector for year can be manipulated by adjusting the source code to
-- YEAR(order_delivery_date) = '${inputs.vol_year.value}'

-- For a copy of the ERD for this schema, please refer to the Project-Technical-Wiki.pdf listed under the PDF Documents folder in this repository.

-- Total Amount Billed in the Current Year
SELECT SUM(total_amount) AS total_billed
FROM souschef.billing_billing
WHERE billing_year = YEAR(CURRENT_DATE);

-- Total Billing Amount by Year (2017-Present)

SELECT billing_year AS year,
       SUM(total_amount) as amount_billed
FROM souschef.billing_billing
GROUP BY 1;

-- Total Billing Amount by Month for the Current Year

SELECT billing_month as month,
       total_amount as total_billed
FROM souschef.billing_billing
WHERE billing_year = YEAR(CURRENT_DATE);

-- Tracking the number of distinct clients serviced by year (2017 - Present)

SELECT YEAR(delivery_date) AS year, COUNT(DISTINCT mc.id) AS clients_served
FROM souschef.order_order orders
LEFT JOIN souschef.member_client mc
    ON orders.client_id = mc.id
GROUP BY 1

-- Tracking the number of distinct clients serviced in the current calendar year

SELECT DATE_TRUNC('month', delivery_date) AS month, COUNT(DISTINCT mc.id) AS clients_served
FROM souschef.order_order orders
LEFT JOIN souschef.member_client mc
    ON orders.client_id = mc.id
WHERE YEAR(orders.delivery_date) = YEAR(CURRENT_DATE)


-- Combining Client and Ordering Data for further JOINs later

DROP TABLE IF EXISTS clients_orders_combined;

CREATE TEMPORARY TABLE clients_orders_combined AS (
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
    AND YEAR(order_delivery_date) = YEAR(CURRENT_DATE)
);

-- Tracking the total number of clients to have ever received meals (2017-Present)

SELECT COUNT(DISTINCT id) AS customers_served_till_date
FROM souschef.member_client;

-- Tracking the number of distinct clients to receive meals this calendar year
SELECT COUNT(DISTINCT client_id) AS clients_serviced
FROM clients_orders_combined;

-- Tracking the number of distinct clients who received their first meal from SR this calendar year


WITH client_delivery_date_ranked as (
    SELECT *,
           RANK() OVER(PARTITION BY client_id ORDER BY delivery_date ASC) AS client_appearance_rank
    FROM souschef.order_order
    WHERE status IN ('D', 'N')
)
SELECT COUNT(DISTINCT client_id) AS new_clients
FROM client_delivery_date_ranked
WHERE client_appearance_rank = 1
AND YEAR(delivery_date) = YEAR(CURRENT_DATE);


-- Tracking number of Ongoing/Episodic Clients

SELECT COUNT(DISTINCT client_id) AS regular_clients
FROM clients_orders_combined
WHERE client_delivery_type = 'O';

SELECT COUNT(DISTINCT client_id) AS episodic_clients
FROM clients_orders_combined
WHERE client_delivery_type = 'E';

-- Tracking number of low-income clients

SELECT COUNT(DISTINCT client_id) AS low_income_clients
FROM clients_orders_combined
WHERE client_rate_type = 'low income';


-- Bucketing clients by age (over 65 and over 80)
SELECT COUNT(DISTINCT client_id) AS clients_over_65
FROM clients_orders_combined
WHERE client_age >= 65;


SELECT COUNT(DISTINCT client_id) AS clients_over_80
FROM clients_orders_combined
WHERE client_age >= 80;


-- Average and Median ages of clients receiving meals this year
SELECT AVG(client_age) AS average_client_age
FROM clients_orders_combined;


SELECT MEDIAN(client_age) AS median_client_age
FROM clients_orders_combined;

-- Anglophone-Francophone demographic breakdown among clients receiving meals this year

  SELECT COUNT(DISTINCT client_id) AS anglophone_clients
  FROM clients_orders_combined
  WHERE client_primary_language = 'en';


  SELECT COUNT(DISTINCT client_id) AS francophone_clients
  FROM clients_orders_combined
  WHERE client_primary_language = 'fr';

-- Gender breakdown among clients receiving meals this year

SELECT COUNT(DISTINCT client_id) AS female_clients
FROM clients_orders_combined
WHERE client_gender = 'F';

SELECT COUNT(DISTINCT client_id) AS male_clients
FROM clients_orders_combined
WHERE client_gender = 'M';

-- Meal Orders Placed this year
-- Meal Orders Delivered this year
-- Meal Orders Canceled this year

SELECT COUNT(id) AS meals_ordered
FROM souschef.order_order
WHERE YEAR(delivery_date) = YEAR(CURRENT_DATE)

SELECT COUNT(DISTINCT id) AS meals_delivered
FROM souschef.order_order
WHERE YEAR(delivery_date) = YEAR(CURRENT_DATE)
AND status IN ('D', 'N');

SELECT COUNT(DISTINCT id) AS meal_orders_canceled
FROM souschef.order_order
WHERE YEAR(delivery_date) = YEAR(CURRENT_DATE)
AND status = 'C';

-- Computing the average number of meal deliveries per week this year

WITH weekly_deliveries AS (SELECT delivery_date,
                                  WEEK(delivery_date) AS delivery_week,
                                  client_id
                           FROM souschef.order_order
                           WHERE status IN ('D', 'N')
                           AND YEAR(delivery_date) = '${inputs.vol_year.value}')
SELECT delivery_week,
       COUNT(DISTINCT client_id) AS meal_deliveries
FROM weekly_deliveries
GROUP BY 1;

SELECT AVG(meal_deliveries) AS average_meals_delivered_per_week
FROM weekly_deliveries_aggregate;

-- Total number of deliveries completed till date (2017-present)

SELECT CAST(COUNT(DISTINCT id) AS INTEGER) AS deliveries_completed_till_date
FROM member_deliveryhistory

-- Summarizing delivery routes information


SELECT name AS route_name,
       description AS route_description,
       vehicle AS route_serviced_by,
       (LENGTH(REPLACE(client_id_sequence, ' ', '')) -
                                        LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) +
                                        1) AS clients_along_route
FROM souschef.member_route;


SELECT YEAR(delivery_date) AS year,
    COUNT(DISTINCT id) AS orders_delivered
FROM souschef.order_order
WHERE status IN ('D', 'N')
GROUP BY 1;

-- Meal orders broken down by month

  SELECT DATE_TRUNC('month', delivery_date) AS month,
    COUNT(DISTINCT id) AS orders_delivered
  FROM souschef.order_order
  WHERE year(delivery_date) = YEAR(CURRENT_DATE)
  AND status IN ('D', 'N')
  GROUP BY 1;

-- Order Delivery Methods Breakdown

 WITH date_method_meals_delivered AS (
    SELECT id,
           date,
           vehicle,
           client_id_sequence AS client_list,
           (LENGTH(REPLACE(client_id_sequence, ' ', '')) -
            LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) + 1) AS number_of_clients
    FROM souschef.member_deliveryhistory
)
SELECT 
    SUM(CASE WHEN vehicle = 'walking' THEN number_of_clients ELSE 0 END) AS by_foot,
    SUM(CASE WHEN vehicle = 'driving' THEN number_of_clients ELSE 0 END) AS by_car,
    SUM(CASE WHEN vehicle = 'cycling' THEN number_of_clients ELSE 0 END) AS by_bike
FROM date_method_meals_delivered
WHERE YEAR(date) = YEAR(CURRENT_DATE);


-- Code to generate the daily delivery heatmap

SELECT date,
    SUM((LENGTH(REPLACE(client_id_sequence, ' ', '')) - LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) + 1)) AS meals_delivered
FROM
    member_deliveryhistory
WHERE YEAR(date) = YEAR(CURRENT_DATE)
GROUP BY 1;

-- Ranking meal delivery routes by number of deliveries

WITH date_route_clients AS (SELECT date,
                                   route_id,
                                   SUM((LENGTH(REPLACE(client_id_sequence, ' ', '')) -
                                        LENGTH(REPLACE(REPLACE(client_id_sequence, ' ', ''), ',', '')) +
                                        1)) AS entry_count
                            FROM souschef.member_deliveryhistory
                            WHERE YEAR(date) = YEAR(CURRENT_DATE)
                            GROUP BY 1, 2
                            ORDER BY 1 DESC)
SELECT routes.name,
       SUM(entry_count) AS number_of_meals_delivered
FROM date_route_clients
LEFT JOIN souschef.member_route routes
ON routes.id = date_route_clients.route_id
GROUP BY 1
ORDER BY 2 DESC;

-- Listing all CLSCs clients have been referred to SR from

  SELECT DISTINCT REPLACE(REPLACE(work_information, '-', ''), '/', '') AS "CLSC"
  FROM member_member
  WHERE work_information LIKE 'CLSC%'
  ORDER BY 1 ASC;




