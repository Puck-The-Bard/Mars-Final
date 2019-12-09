const express = require('express');

const path = require('path');

const app = express();

// Serve only the static files form the dist directory 

app.use(express.static(__dirname + '/dist/MarsFinal'));

app.get('*', function(req,res) {

    res.sendfile(path.join(__dirname + '/dist/MarsFinal/index.html'));
});

app.listen(process.env.PORT || 3000);