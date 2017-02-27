const express = require('express'), bodyParser = require('body-parser');
const cleverbotUtil = require('./cleverbot-util');

const { sendMessage } = cleverbotUtil;

var app = express();

app.use(bodyParser.json()); //Use body parser middleware to populate body of request
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//The get call that will serve index to browser
app.post('/message', function(req, res) {
  console.log('in message');

  const message = req.body.message;
  console.log('message is: ' + message);
  sendMessage(message).then(function(response) {
    //console.log(response.output); //=> Livin' in a lonely world!
    console.log('i have a message response!!!!!');
    console.log(response);
    const { data } = response;
    res.json(response);
  });
});

app.listen(8081);
console.log('listening on 8081');
