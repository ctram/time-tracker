const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/users', function (req, res, next) {
  const { email, password } = req.body;

  console.log('route: /users');

  console.log(User);
  
  User.build({ email, password }).then(user => {
    console.log('newly built user ${user}');
  })

  console.log(`users request ${email + ' ' + password}`);

router.post('/', function(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);
    res.send('respond with a resource');
});

module.exports = router;
