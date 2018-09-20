const pg = require('pg');
const Pool = pg.Pool;

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

module.exports = pool;