USE Pixar;
SELECT * FROM BoxOffice;
SELECT * FROM Movies;
SELECT * FROM Theater;

SELECT M.title, B.domestic_sales, B.international_sales
FROM BoxOffice AS B
INNER JOIN Movies AS M ON B.movie_id = M.id;
    
SELECT m.title, b.domestic_sales, b.international_sales, m
FROM BoxOffice b
INNER JOIN Movies m ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;
    
SELECT m.title, b.rating
FROM BoxOffice b
INNER JOIN Movies m ON b.movie_id = m.id
ORDER BY b.rating DESC;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater t
LEFT JOIN Movies m ON m.theater_id = t.id
ORDER BY t.name;

SELECT m.title, m.director, m.year, m.length_minutes, t.name, t.location
FROM Theater t
RIGHT JOIN Movies m ON m.theater_id = t.id
ORDER BY m.title;

SELECT m.title, b.rating, m.director, m.year, m.length_minutes, b.domestic_sales, b.international_sales, t.name, t.location
FROM BoxOffice b
INNER JOIN Movies m ON b.movie_id = m.id
LEFT JOIN Theater t ON t.id = m.id
WHERE b.rating > 8;

SELECT m.title, b.rating, m.director, m.year, m.length_minutes, b.domestic_sales, b.international_sales, t.name, t.location
FROM BoxOffice b
INNER JOIN Movies m ON b.movie_id = m.id
F JOIN Theater t ON t.id = m.id
WHERE b.rating > 8;

