const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'backend',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  db.query('SELECT "halo semua" as message', (err, data) => {
    if (err) return res.status(500).json({
      message: 'cannot get data',
      info: err,
    });

    return res.json(data[0]);
  });

});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
