import sqlite3 from "sqlite3";

var db = new sqlite3.Database("sql/database.db", function (err) {
  if (err) console.log(err);
});
 

export const createProduct = (req, res) => {
  if (!req.body.name || !req.body.category || !req.body.description || !req.body.image || !req.body.price) {
    res.json({ errormsg: "Request not valid" });
    return;
  }

  runSql(res, `INSERT INTO ProductsDB (name, category, description, image, price) VALUES(?, ?, ?, ?, ?)`, [
    req.body.name, 
    req.body.category, 
    req.body.description, 
    req.body.image, 
    req.body.price]);
};

export const getProducts = (req, res) => {
  var sql = "select * from ProductDB";
  var params = [];

  allSql(res, sql, params);
};

export const getAllProducts = (req, res) => {
  var sql =
    "select ProductDB.id as productId, ProductDB.name as productName, ProductDB.category as productCategory, ProductDB.description as productDescription, ProductDB.image as productImage, ProductDB.price as productPrice";
  var params = [];

  allSql(res, sql, params);
};

export const updateProduct = (req, res) => {
  if (!req.params.productId || !req.body.name || !req.body.category || !req.body.description || !req.body.image || !req.body.price) {
    res.json({ errormsg: "Request not valid" });
    return;
  }

  runSql(res, `UPDATE ProductDB SET name = ?, category = ?, description = ?, image = ?, price = ? WHERE id = ?`, [
    req.params.productId,
    req.body.name,
    req.body.category,
    req.body.description,
    req.body.image,
    req.body.price,
  ]);
};

export const deleteProduct = (req, res) => {
  if (!req.params.productId) {
    res.json({ errormsg: "Request not valid" });
    return;
  }

  runSql(res, `DELETE FROM ProductDB WHERE id = ?`, [req.params.productId]);
};


function runSql(res, sql, params) {
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
    });
  });
}

function allSql(res, sql, params) {
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
}
