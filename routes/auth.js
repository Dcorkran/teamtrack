var express = require('express');
var router = express.Router();
const queryFunctions = require('../db/query');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth', { title: 'TeamTrack' });
});

router.post('/new-user', function(req, res, next) {
  queryFunctions.postUser(req.body)
  .then(()=>{
    res.redirect('../');
  });
});

router.post('/sign-in', function(req, res, next) {
  queryFunctions.loginUser(req.body)
  .then((data)=>{
    if (data === false) {
      res.json('wrong password bro');
    } else {
      res.redirect('../');
    }
  });
});

module.exports = router;
