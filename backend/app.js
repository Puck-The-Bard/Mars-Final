const express = requrie("express");
const bodyParser = require("body-parser");
const mongoose = requrie("mongoose");

const app = express();

const Post = require('./model/Post');
const apiConnect = "https://api.nasa.gov/insight_weather/?api_key=i8xRurVTbP8FkeiMf2kSsD5n9QkbiD9WhT0CzQZp&feedtype=json&ver=1.0";

mongoose.connect("mongodb+srv://ZM4382:MongoUsrPass2019*@backendclasscluster-0iora.mongodb.net/MarWeather?retryWrites=true&w=majority")
.then(() => {
    console.log('Connected to Database');
})
.catch(() =>{
    console.log('Database Connection Failed');
});


app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        id: req.id,
        id: req.title,
        completed: req.completed

    })
});
post.save();
res.status(201).json({
    message: "post added successfully"
})

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