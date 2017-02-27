const express = require('express'), bodyParser = require('body-parser');
const cleverbotUtil = require('./cleverbot-util');
const { sendMessage } = cleverbotUtil;

var app = express();

app.use(bodyParser.json()); //Use body parser middleware to populate body of request
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//This call is used so that web pack dev server can proxy to this call and the real api call can be made
app.post('/message', function(req, res) {
  const message = req.body.message;

  //Call the cleverbot api and return the response
  sendMessage(message).then(function(response) {
    res.json(response);
  });
});

app.listen(8081);
console.log('listening on 8081');
