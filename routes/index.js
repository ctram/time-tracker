var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(/.*/, function (req, res, next) {
    console.log('GET GET GET GET');
    res.redirect('/');
});

router.post(/.*/, function (req, res, next) {
    console.log('POST POST POST POST');
    res.redirect('/');
});

module.exports = router;
