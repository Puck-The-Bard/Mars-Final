const express = require('express');

const path = require('path');

const app = express();

const cron = require('node-cron');
const axios = require('axios');

// Serve only the static files form the dist directory 

app.use(express.static(__dirname + '/dist/MarsFinal'));

app.get('*', function(req,res) {

    res.sendfile(path.join(__dirname + '/dist/MarsFinal/index.html'));
});

app.listen(process.env.PORT || 3000);

let task = cron.schedule('*/2 * * * *', () => {

    axios.get('https://jsonplaceholder.typicode.com/todos')
     .then( (response) => {console.log(response.data);
         //parseWeather(response.data);
     })
     .catch( (error) => {
         console.log(error);
     });
 
     },{
         scheduled: false
     }
 );
 
 task.start();