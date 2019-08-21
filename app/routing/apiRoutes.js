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