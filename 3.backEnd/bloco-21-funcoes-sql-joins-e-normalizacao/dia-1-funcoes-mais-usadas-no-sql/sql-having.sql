SELECT rating, AVG(length) AS Rating_Médio
FROM sakila.film
GROUP BY rating
HAVING Rating_Médio BETWEEN 115.0 AND 121.50
ORDER BY Rating_Médio;

SELECT rating, SUM(replacement_cost) AS Replacement_Cost
FROM sakila.film
GROUP by rating
HAVING Replacement_Cost > 3950.50
ORDER BY Replacement_Cost;