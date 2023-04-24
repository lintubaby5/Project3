CREATE TABLE Movietable(
Title VARCHAR(200)  NOT NULL,
Rating	DECIMAL,
Year SMALLINT,
Month	VARCHAR(20) NOT NULL,
Certificate	VARCHAR(200)  NOT NULL,
Runtime	DECIMAL,
Directors	VARCHAR(200)  NOT NULL,
Stars	VARCHAR(200)  NOT NULL,
Genre	VARCHAR(200)  NOT NULL,
Filming_location	VARCHAR(200)  NOT NULL,
Budget	FLOAT,
Income	FLOAT,
Country_of_origin VARCHAR(200)  NOT NULL
);

drop table Movietable 


-- load all the movies in the database 

SELECT s.Title, s.Rating, s.Year, s.Month, s.Certificate, s.Runtime, s.Directors, s.Stars, s.Genre, s.Filming_location, s.Budget, s.Income, s.Country_of_origin
FROM Movietable AS s


--top 20 rated movies from 2003 to 2022 

SELECT
Title, 
Rating,
Year,
Certificate,
Stars,
Genre

FROM Movietable
ORDER BY Rating DESC
limit 20;

-- top 20 profitable movies from 2003 to 2022


SELECT Title, Income, Rating,Year
FROM Movietable
ORDER by Income DESC
LIMIT 20;
 
-- Number of movies released from 2003 to 2022

SELECT Year, COUNT(*) AS movies_per_year 
FROM Movietable  
GROUP BY Year 
ORDER BY Year DESC;



-- average run time
SELECT CAST(AVG(Runtime) AS DECIMAL(10,2)) AS AVGRuntime 
FROM Movietable;

-- average runtime for each movie
SELECT Title, CAST(AVG(Runtime) AS DECIMAL(10,2)) AS Average_Runtime 
FROM Movietable 
GROUP BY Title;


-- number of movies in rating catergory 
SELECT Rating, COUNT(*) AS num_of_rating
FROM Movietable
GROUP BY Rating
ORDER BY Rating DESC;

-- top 10 Filming location  
SELECT Filming_location, COUNT(*) AS movies_filmed
FROM Movietable
GROUP BY Filming_location
ORDER BY movies_filmed DESC
limit 10;


--  per year 
SELECT Year, Filming_location, COUNT(*) AS filmed_per_yr
FROM Movietable
GROUP BY Year, Filming_location
ORDER BY year, filmed_per_yr DESC;




