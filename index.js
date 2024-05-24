// index.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware untuk menyajikan file statis
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'src')));

// Serve static files from the 'src' directory
app.use('/src', express.static(path.join(__dirname, 'src')));

// Route ke index.html
app.get('/', (req, res) => {
   // Membaca file JSON
   fs.readFile('src/data.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the JSON file", err);
      res.status(500).send("Error reading the JSON file");
      return;
    }
    
    // Parse data JSON
    const animalsData = JSON.parse(data);

    // Mengirim data ke EJS
    res.render('home2.ejs', { animals: animalsData.animals });
  })
});

// Route ke index.html
app.get('/gurem', (req, res) => {
   // Membaca file JSON
   fs.readFile('src/data.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the JSON file", err);
      res.status(500).send("Error reading the JSON file");
      return;
    }
    
    // Parse data JSON
    const animalsData = JSON.parse(data);

    // Mengirim data ke EJS
    res.render('index.ejs', { animals: animalsData.animals });
  })
});

// Route ke index.html
app.get('/tes', (req, res) => {

  // Mengirim data ke EJS
  res.render('tes.ejs');

});

// Route ke index.html
app.get('/tes2', (req, res) => {

  // Mengirim data ke EJS
  res.render('tes2.ejs');

});

// Route ke index.html
app.get('/', (req, res) => {

  // Mengirim data ke EJS
  res.render('home2.ejs');

});

app.get('/map', (req, res) => {

  // Mengirim data ke EJS
  res.render('map3.ejs');

});
app.get('/map3', (req, res) => {

  // Mengirim data ke EJS
  res.render('map3.ejs');

});
// Route ke index.html
app.get('/Map2', (req, res) => {

   // Mengirim data ke EJS
   res.render('Map.ejs');

});

app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
