const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const {response} = require("express");

const app = new express;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login',(req, res)=>{
    res.render('login')
})

app.listen(5000, () => {
    console.log('Start PORT 5000');
})