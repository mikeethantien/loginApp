var express = require("express");
var bodyParser = require("body-parser");

var path = require('path');

var app = express()
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({extended: false}))
   .use(express.static(__dirname + '/public'))

   //load /views/index.html by default
   .get('/', function(req, res) {
      res.status(200).sendFile(path.join(__dirname + '/views/index.html'));
   })

   //The api which authenticates the login. Only returns an error if the password is 'password'.
   .post('/authenticate', function(req, res) {

    if(req.body.password === "password") {
      res.status(401).json({message: "You have entered the incorrect password."});
    }

    else {
      res.status(200).json({message: "You have logged in successfully."});;
    }
   })

   .listen(8080);
