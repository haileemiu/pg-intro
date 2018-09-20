const express = require('express');
const pool = require('../modules/pool')

let router = express.Router();

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {

  pool.query(`INSERT INTO "shoes" ("name", "cost")
            VALUES ($1, $2);`, 
            [req.body.name, req.body.cost])
    .then(() => {
      res.send(201);
    })
    .catch((error) => {
      console.log('error with SQL insert for shoes', error);
      res.sendStatus(500);
    })
})

module.exports = router;