const express = require('express')
const app = express()

let history = "";

app.get('/input/:letter', function (req, res) {
    history += req.params.letter.substr(0, 1);
    res.send("Commands: " + history);
})
app.get('/', function (req, res) {
    res.send("Wrong Endpooint");
})
  
app.listen(3000);