SELECT A.actor_id, A.first_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

SELECT C.customer_id, C.first_name, C.email, A.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

SELECT C.customer_id, C.first_name, C.email, A.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

SELECT C.first_name, COUNT(A.address) as 'Qnt. Endereços'
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.customer_id
ORDER BY C.first_name DESC, C.last_name DESC;

SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT s.first_name, s.last_name, AVG(p.amount) AS 'Valor Pago'
FROM sakila.staff AS s 
INNER JOIN sakila.payment AS p
ON p.staff_id = s.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;


