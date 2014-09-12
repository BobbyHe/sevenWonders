var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log(req.query);
    res.render('login', { userName: req.query.userName });
});
// // Setup the ready route.
// app.io.route('ready', function(req) {
//     req.io.respond({
//         success: 'here is your acknowledegment for the ready event'
//     });
// });

module.exports = router;
