// Import Express
const express = require('express');
// Instantiate Express
const app = express();


app.get('/', function(req,res) {
    res.send('hello!');
})

// Regular Dependencies
// const moment = require('moment');

// Middlewares
// const logger = require('./logger.js');
// const exphbs = require('express-handlebars');
// app.use(logger.log);
// app.use(express.static('public'));
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// const blogData = require('./blog_data.json');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_POASS,
    database: process.env.DB_NAME
});

app.use(function(req,res) {
    res.status(404).send('Dont know where that is');
})

const listener = app.listen(process.env.PORT || 5000, function () {
    console.log(`Your app is listening on port ${listener.address().port}`)
})

