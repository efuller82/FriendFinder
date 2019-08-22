var friendsData = require('../data/friends.js');


module.exports = function (app) {
    // GET route that will display JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);

    });


    // POST Route handle incoming survey results and also will be used to handle compatibility logic
    app.post('/api/friends', function (req, res) {
        friendsData.push(req.body);
        res.json(true);
    })
}

var newbie = {
    name: 'Eric',
    scores: [1, 3, 1, 5, 5, 3, 4, 4, 2, 1]
}
diffArray = [];
diffArraySum = 0;

// loop through each person's scores comparing them with newbie;
for (var i = 0; i < friendsData.length; i++) {
    diffArray.push(Math.abs(newbie.scores[i] - friendsData[0].scores[i]));
}
for (var j = 0; j < diffArray.length; j++) {
    diffArraySum += diffArray[j];
}

// loop through completed scores and find which one has the smallest difference;
console.log(diffArray);
console.log(diffArraySum);
