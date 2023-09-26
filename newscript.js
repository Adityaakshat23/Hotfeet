const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Signupform.html');
});
app.post('/', function(req, res) {
    var email = req.body.email;
    var password = req.body.p1;
    var retypepassword = req.body.p2;
    var data = {

    }

})
app.listen(3000, function(req, res) {
    console.log("listening")
});
//apikey- bb2b0b51ff86d1fcac0a7433179a1aef-us12
//audiencekey- 784698b729.