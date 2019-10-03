const express = require('express')
const app = express()

let history = "";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/input/:letter', function (req, res) {
    history += req.params.letter.substr(0, 1);
    console.log(history);
    res.send("Commands: " + history);
})
app.get('/', function (req, res) {
    res.send("Wrong Endpooint");
})
  
app.listen(3000);