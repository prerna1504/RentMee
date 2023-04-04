// DATABASE CONFIGURATION

const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/assets', express.static(path.join(__dirname, './assets')));
const cors = require('cors');


app.use(cors({
    origin:"http://localhost:8080"
}))


const port = process.env.PORT || 4242;


const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

var routes = require('./routes/routes')


app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port,() => {
    console.log(`server is running at ${port}`);
})
mongoose.connect("mongodb://127.0.0.1:27017/furniture")
.then(()=>console.log('connection has been made'))
.catch(()=>console.log('connection lost'))




app.use(bodyParser.json());
app.use(express.json());
app.use(routes);










