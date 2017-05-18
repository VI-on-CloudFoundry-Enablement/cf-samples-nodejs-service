'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {

	var result = {
			success : true,
			message : "Cloud Foundry Service on NodeJS"
	}
	
  res.send(JSON.stringify(result));
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});