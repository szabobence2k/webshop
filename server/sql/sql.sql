--CREATE TABLE ProductsDB (
--	id INTEGER  PRIMARY KEY AUTOINCREMENT,
--	name TEXT,
--	price INTEGER,
--	category TEXT,
--  description TEXT,
--  image TEXT
--	);

-- INSERT INTO ProductsDB (name, category, description, image, price) VALUES 
-- 	('Felni','Autóalkatrész', 'Jó állapotban, karcmentes. R16-os KIA felni.', 'https://via.placeholder.com/150', 40000),
-- 	('Kia Ceed','Autó', 'Jó állapotban. Nem dohányzó, nyugdíjas házaspártól.', 'https://via.placeholder.com/150', 2000000);

SELECT * FROM ProductsDB

--UPDATE ProductsDB SET description="Jó állapotban. Nem dohányzó, nyugdíjas házaspártól." WHERE id=2
