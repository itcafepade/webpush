const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');

const app = express();

const server = app.listen('3000', ()=>{
    console.log("Listen to port 3000");
});

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(router);