//bibliotecas instaladas através do terminal
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();

//Template engine
app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.set('view engine',handlebars);
/*app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use('/img',express.static('img'));*/

//routes and templates
app.get("/",function(req, res){
    /*res.send("Essa é a minha página inicial!");*/
    /*res.sendFile(__dirname+"/index.html");*/
    /*console.log(req.params.id);*/
    res.render('index.handlebars');    
});

app.get("/javascript",function(req,res){
    res.sendFile(__dirname+'/js/javascript.js');
});

app.get("/style",function(req,res){
    res.sendFile(__dirname+'/css/style.css');
});



//Start server
app.listen(3000, function(req, res){
    console.log('Servidor está rodando!')
});