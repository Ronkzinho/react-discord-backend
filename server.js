// server.js
// where your node app starts
require("dotenv/config")
// init project
const express = require('express');
const app = express();
var index = require("./index.js")
const cors = require("cors")
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var bot = index
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(cors()) 
// http://expressjs.com/en/starter/basic-routing.html


app.post('/', function (req, res) { //endereco da requisicao onde e retornado hello world
  bot.saveColor(req.body.user, req.body.color)
})
app.get('/', function (req, res) {
  res.send("OK")
})

app.get("/user/:id", function(req, res) {
  index.getColor(req.params.id).then(result => {
    res.send(result)
  })
})

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
module.exports = { app }