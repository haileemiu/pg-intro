const express = require('express');
const bodyParser = require('body-parser');

const shoeRouter = require('./routes/shoe.router')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// basically runs on every single router (don't need body-parser anywhere else)
// so needs to be below body-parser
app.use('/shoes', shoeRouter);
// add any new routes here

const port = process.env.PORT || 5000;
// spin up server
app.listen(port, () => {
  console.log('server up on:', port);
}) // end spin up server

