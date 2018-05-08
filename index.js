const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars'),
    MongoClient=require('mongodb').MongoClient;

var app = express(),
db;

app.engine('hbs', consolidate.handlebars);
app.set('view engine','hbs');
app.set('views','./views');

app.use(express.static('public'))

//conectarse a la base de datos
MongoClient.connect('mongodb://localhost:27017',function(err,client){
    if(err)throw err;
    console.log(err);
    db=client.db('productos');
    //iniciar el servidor
    app.listen(1889, function () {
        console.log('Listening port 1889');
    });});


app.get("/", function (req, res) {
    var maquillaje=db.collection('maquillaje').find();
    maquillaje.toArray((err,result) =>{
        res.render('index', {
            titulo: 'Tonymoly',
            maquillaje:result
        }); 
    });
});

