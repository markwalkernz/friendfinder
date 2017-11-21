// data source
var friendsList = require("../data/friends");


// define api routes in a function which is available through require
module.exports = function(app) {

  // API GET request to make friends list available in JSON format
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  // API POST request to handle submission of new friend data
  app.post("/api/new", function(req, res) {

    // add new data to friends list
    friendsList.push(req.body);
    console.log(friendsList);
  });

};