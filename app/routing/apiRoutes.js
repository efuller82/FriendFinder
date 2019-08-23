var friendsData = require('../data/friends.js');


module.exports = function (app) {
    // GET route that will display JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);

    });



    // POST Route handle incoming survey results and also will be used to handle compatibility logic
    app.post('/api/friends', function (req, res) {
        // console.log(JSON.stringify(req.body));
        res.json(findMatch(req.body));
        friendsData.push(req.body);

    })
}

function findMatch(newbie) {
    var friendDataRefresh = friendsData;

    // loop through each friend minus the one (the user whose input was just added)
    for (var i = 0; i < friendDataRefresh.length; i++) {
        friendDataRefresh[i].difference = [];
        friendDataRefresh[i].totalDifference;

        for (var j = 0; j < friendDataRefresh[i].scores.length; j++) {
            // loops through scores; pushes to array
            friendDataRefresh[i].difference.push(Math.abs(newbie.scores[j] - friendDataRefresh[i].scores[j]));
            friendDataRefresh[i].totalDifference = friendDataRefresh[i].difference.reduce((a, b) => a + b, 0);
        }
    }
    var totalDiffArr = [];
    for (var i = 0; i < friendDataRefresh.length; i++) {
        totalDiffArr.push(friendDataRefresh[i].totalDifference);
        var index = 0;
        var value = totalDiffArr[0];
        for (var j = 1; j < friendDataRefresh.length; j++) {
            if (totalDiffArr[j] < value) {
                value = totalDiffArr[j];
                index = j;
            }
        }

    }
    return friendDataRefresh[index];

}




