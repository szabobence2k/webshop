
const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to db
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});


//insert
/*sql = `INSERT INTO ProductsDB (name, category, description, image, price) VALUES (?,?,?,?,?)`;
db.run(sql, ["gumi", "alkatrész", "jo allapotooooo", "xvzdd", 5000], (err) => {
  if (err) return console.error(err.message);
});*/

//query data
sql = `SELECT * FROM ProductsDB`;
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach((row) => {
    dbid = row.id;
    dbtitle = row.name;
    dbprice = row.price;
    dbcategory = row.category; 
    dbdescription = row.description;
    dbsProduct.image  = row.image;
    console.log(row);
  });
});
