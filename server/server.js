// // const express = require('express');
// // const path = require('path');
// // const db = require('./db');

// // const app = express();

// // Middleware
// // app.use(express.json());
// // app.use(express.static(path.join(__dirname, '../public')));

// // // EJS Template Engine
// // app.set('view engine', 'ejs');
// // app.set('views', path.join(__dirname, '../views'));

// // // Routes
// // app.get('/', (req, res) => res.render('pages/home'));
// // app.get('/about', (req, res) => res.render('pages/about'));
// // app.get('/infrastructure', (req, res) => res.render('pages/infrastructure'));
// // app.get('/admission', (req, res) => res.render('pages/admission'));
// // app.get('/academics', (req, res) => res.render('pages/academics'));
// // app.get('/activities', (req, res) => res.render('pages/activities'));
// // app.get('/contact', (req, res) => res.render('pages/contact'));

// // // Start Server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.get('/', (req, res) => res.render('pages/home'));
app.get('/about', (req, res) => res.render('pages/about'));
app.get('/infrastructure', (req, res) => res.render('pages/infrastructure'));
app.get('/admission', (req, res) => res.render('pages/admission'));
app.get('/academics', (req, res) => res.render('pages/academics'));
app.get('/activities', (req, res) => res.render('pages/activities'));
app.get('/contact', (req, res) => res.render('pages/contact'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


