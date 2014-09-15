'use strict';

module.exports = function (app) {
    app.get('/login', function (req, res) {
        console.log('rendering');
        res.render('login', { userName: req.query.userName });
    });

    // Setup the ready route.
    app.io.route('ready', function(req) {
        req.io.respond({
            success: 'here is your acknowledegment for the ready event'
        });
    });
};
