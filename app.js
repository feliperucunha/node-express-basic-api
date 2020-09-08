const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')


//MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())

//IMPORT ROUTES
const postsRoute = require('./routes/posts')

//ROUTE MIDDLEWARES
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are home');
});


//DB connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB'))

app.listen(3000);
