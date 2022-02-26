USE Scientists;
SELECT * FROM Scientists WHERE name LIKE '%e';
SELECT * FROM Projects WHERE CODE LIKE 'A%' ORDER BY Name;
SELECT Code, Name FROM Projects WHERE CODE LIKE '%3%' ORDER BY Name;
SELECT * FROM AssignedTo WHERE Project IN ('AeH3', 'Ast3', 'Che1');
SELECT * FROM Projects WHERE Hours > 500;
SELECT * FROM Projects WHERE Hours between 250 and 800;
SELECT Name, Code FROM Projects WHERE NOT Name LIKE 'A%';
SELECT Name FROM Projects WHERE Code LIKE '%H%';