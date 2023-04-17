const express = require('express');
const bodyParser = require('body-parser');
const  mongoose  = require('mongoose');

const route = require('./Routes/userRoute.js');


const { json } = require('body-parser'); //receive post request (parse the incoming request bodies in a middleware)
const app = express();



/////////////////////////////////////////////////////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://shiva:ZxJf1KONMThYSpCU@cluster0.yuxls.mongodb.net/gymmmmm', {   
    useNewUrlParser: true,
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);    //parse incoming request body in JSON format

app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))    //Listen for incoming requests
});