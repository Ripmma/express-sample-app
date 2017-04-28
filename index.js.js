var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.get("/hello", (request, respond) => {
	respond.json({
		"hello": "Hello Adam", 
		"Syntax": "NO IT'S NOT ES6!!!!.... or is it?"
	});
});

app.post("/hello", (request, respond) => {
	console.log(request.body);
});

app.listen(8080);
console.log("Server is running!");