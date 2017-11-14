var express = require('express');
var router = express.Router();
const request = require('request');



/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    request.get('https://jsonplaceholder.typicode.com', function(err, response, body){
      if(err){
        console.log('Error:' + res.err);
      } 
      if(res.statusCode == 200){
        console.log(body);
      } 
    });
});

module.exports = router;
