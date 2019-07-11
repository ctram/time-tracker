const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/running', (req, res, next) => {
    console.log('called from /running')
});

module.exports = router;
