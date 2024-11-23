const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mouni@1729',
  database: 'inter_assetment'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = db;
