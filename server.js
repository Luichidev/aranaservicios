//Install express server
const express = require('express');
const path = require('path');

const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/ASII'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/ASII/index.html'));
});
// Start the app by listening on the default Heroku port
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
  console.log("Server started.......");
});
