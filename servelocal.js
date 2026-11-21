const express = require('express')
const app = express()
const path = require('path'); // Import the path module

var port = process.env.PORT || 5000;
 
// This tells the app which port to listen to
app.listen(port, () => {
  console.log(`Server is running on port ` + port)
})

//This shows the response that will sent to the user
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Send the index.html file
})

app.get('/perlin.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'perlin.js')); // Send the index.html file
})

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles.css')); // Send the index.html file
})