const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
const app = express();
const client = require('twilio')("ACca701cbbd0ff73c1a5fe3903a0a7210d","b148edc40817f723942c64e2cc135bd2")

function sendTextMsg(){
    client.messages
      .create({
         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
         from: '+17815126184',
        //  from: '+13342595145',
         to: '+917795880991'
       })
      .then(message => console.log(message.sid))
      .catch(error => console.log(error))
}

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

app.listen(3001, () => {
  console.log('Express server listening on port 3001');
});