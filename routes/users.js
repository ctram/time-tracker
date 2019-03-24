var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);
    res.send('respond with a resource');
});

module.exports = router;
