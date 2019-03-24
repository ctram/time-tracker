var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log('post users /post users /post users /post users /post users /post users /');
    res.send('respond with a resource');
});

module.exports = router;
