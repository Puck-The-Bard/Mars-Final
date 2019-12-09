const express = require('express');

const path = require('path');

const app = express();

// Serve only the static files form the dist directory 

app.use(express.static(__dirname + '/dist/Marsfinal'));

app.get('*', function(req,res) {

    res.sendfile(Path.join(__dirname + '/dist/MarsFinal/index.html'));
});

app.listen(process.env.PORT || 3000);