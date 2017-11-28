// data source
var friendsList = require("../data/friends");

// define api routes in a function which is available through require
module.exports = function(app) {

  // GET request to make friends list available in JSON format
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
    console.log("friends list requested");
  });

  // POST request to handle submission of new friend data and return the best match
  app.post("/api/new", function(req, res) {

    // initialise variables
    var newFriend = req.body;                 // the new friend data that has been submitted
    var scoresLength = 10;                    // the number of questions in the survey
    var friendsLength = friendsList.length;   // the current length of the friends array
    var bestScore = 5*scoresLength;           // the best score so far, starts as a high number
    var bestMatch = 0;                        // the array position of the best match


    // loop through each friend
    for (var i = 0; i < friendsLength; i++) {

      // initialise variables
      var totalScore = 0;        // the total score for the potential friend
      var difference = 0;   // the difference between the new friend and potential friend scores for a particular question

      // loop through each score and add the difference between scores
      for (var j = 0; j < scoresLength; j++) {
        difference = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendsList[i].scores[j]));
        totalScore += difference;
      };

      // check if the current score is better than the best score, a low score is better
      if (totalScore < bestScore) {
        bestMatch = i;
        bestScore = totalScore;
      };

    };

    // add new data to friends list
    friendsList.push(req.body);
    console.log("New friend added");

    // respond to POST with the best match
    res.json(friendsList[bestMatch]);

  });

};