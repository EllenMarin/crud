//bibliotecas instaladas através do terminal
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const { SSL_OP_NO_QUERY_MTU } = require('node:constants');
const app = express();
const urlencodeParser = bodyParser.urlencoded({extend:false});//enviar dados
const sql = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'JavaScript123*',
    port:3306
}); //conecção com base de dados

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

app.get("/javascript",function(req,res){res.sendFile(__dirname+'/js/javascript.js');});
app.get("/style",function(req,res){res.sendFile(__dirname+'/css/style.css');});
app.get("/inserir",function(req,res){res.render("inserir.handlebars");});
app.get("/select/:id?",function(req,res){
    if(!req.params.id){
        sql.query("select * from user",function(err,results,fields){
            res.render("select.handlebars",{data: results});
        });
    }
});


//Start server
app.listen(3000, function(req, res){console.log('Servidor está rodando!');});