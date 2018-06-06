
var express = require("express");
var app = express();
var path = require('path');
var bodyParser= require('body-parser')
var port = require('./config').port;


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
	console.log("----- request received ------")
	next()
})

app.use("/dist", express.static(path.join(__dirname + '/dist')));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

let djservice = require("./djservice");
app.use("/api", djservice);


app.listen(port, function() {
    console.log("listening in " + port)
})