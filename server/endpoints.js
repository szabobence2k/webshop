const cors = require("cors");
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

const cookieParser = require('cookie-parser');
app.use(cookieParser('your-secret-key', {
  sameSite: 'none',
  httpOnly: false,
  secure: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

//adatbázis létrehozása
const db = new sqlite3.Database('./sql/database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
});

const createProductsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS ProductsDB (
    	id INTEGER  PRIMARY KEY AUTOINCREMENT,
    	name TEXT,
    	price INTEGER,
    	category TEXT,
      description TEXT,
      image TEXT
    )
  `;

  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
};

createProductsTable();

//products
app.get('/api/products', (req, res) => {
  let  sql = 'SELECT * FROM ProductsDB';

  if (req.query.category) {
    let category = req.query.category;
    sql += ` WHERE category = '${category}'`;
  }

  
  if (req.query.sort === 'asc') {
    sql += ' ORDER BY price ASC';
  } else if (req.query.sort === 'desc') {
    sql += ' ORDER BY price DESC';
  }

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json(rows);
  });
});

//categories
app.get('/api/products/category', (req, res) => {
  const sql = 'SELECT category FROM ProductsDB GROUP BY category';

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json(rows);
  });
});

app.post('/api/products', (req, res) => {
  const { name, price, category, description, image } = req.body;

  if (!name || !price || !category || !description || !image ) {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  const sql = 'INSERT INTO ProductsDB (name, price, category, description, image) VALUES(?, ?, ?, ?, ?)';
  const params = [ name, price, category, description, image ];

  db.run(sql, params, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      id: this.lastID,
      name, 
      price, 
      category, 
      description, 
      image
    });
  });
});

app.put('/api/products/:id', (req, res) => {
  const { name, price, category, description, image } = req.body;

  if (!name || !price || !category || !description || !image ) {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  const { id } = req.params;
  const sql = 'UPDATE ProductsDB SET name = ?, price = ?, category = ?, description = ?, image = ? WHERE id = ?';
  const params = [ name, price, category, description, image, id ];

  db.run(sql, params, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      id: +id,
      name, 
      price, 
      category, 
      description, 
      image
    });
  });
});

app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM ProductsDB WHERE id = ?';

  db.run(sql, id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({ message: 'Todo deleted successfully' });
  });
});

app.listen(port, () => {
  console.log(`SQL Server started on port ${port}`);
});