const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

//Routes
const usersSystemRouter = require('./routes/userSystem')
const bizSystemRouter = require('./routes/bizSystem')
const userRouter = req


mongoose.connect('mongodb://localhost/dataProject')
    .then(()=> console.log('connected to data base'))
    .catch((err)=> console.log(err))



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes usage
app.use('/users', usersSystemRouter)
app.use('/biz', bizSystemRouter)
app.use('/user/register', )


module.exports = app;
