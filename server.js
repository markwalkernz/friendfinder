// Coding Boot Camp Week 13 Homework. Node and Express Servers. 

// npm packages
var express = require("express");
var bodyParser = require("body-parser");

// create an instance of express server
var app = express();

// Set port
var PORT = process.env.PORT || 3000;

// use bodyParser to handle data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define api and html routes in separate files
//require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);


// start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
