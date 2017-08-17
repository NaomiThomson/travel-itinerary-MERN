var express = require('express');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// Create our app
var app = express();

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] == 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, x-auth');
  res.setHeader('Access-Control-Expose-Headers', 'x-auth');
  next();
});


app.use(express.static('public'));
app.use(bodyParser.json());



// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});



app.listen(PORT, function () {
  console.log('Express server is up on port 3000');
});