// index.js
const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware untuk menyajikan file statis
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'src')));

// Route ke index.html
app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/src/index.ejs'));
});



app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
