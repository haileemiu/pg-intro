const pg = require('pg');
const express = require('express');
const app = express();
const Pool = pg.Pool;
const port = process.env.PORT || 5000;

// Set up to connect to database
const pool = new Pool({
  // name of database
  database: 'shoe_store',
  // will change on deployment
  host: 'localhost',
  // postgres default port
  port: '5432',
  // number of requests at one time
  max: 10,
  // 30 seconds
  idleTimeoutMillis: 30000
}) // END pool

// optional 
pool.on('connect', () => {
  console.log('postgresql connected!');
});

// optional
pool.on('error', (error) => {
  consol.log('error with postgresql pool:', error);
});

// spin up server
app.listen(port, () => {
  console.log('server up on:', port);
}) // end spin up server

app.get('/shoes', (req, res) => {
  // connect
  // name of table "shoes"
  pool.query('SELECT * FROM "shoes";')
    // does not have be to be "results"
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('error with SQL select for shoes', error);
      res.sendStatus(500);
    })
})