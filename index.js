const express = require('express'),
    engines = require('consolidate'),
    hbs = require('handlebars'),
    MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectId;

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'))

//conectarse a la base de datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;
    console.log(err);
    db = client.db('productos');
    //iniciar el servidor
    app.listen(1889, function () {
        console.log('Listening port 1889');
    });
});


app.get("/producto/:id", function (req, res) {
    var producto = db.collection('maquillaje').find({
        id: "" + req.params.id + ""
    });
    producto.toArray((err, result) => {
        res.render('producto', {
            titulo: 'Tonymoly',
            prod: result[0]
        });
    });
});

app.get("/", function (req, res) {

    var maquillaje = db.collection('maquillaje').find();

    if (req.query.zone)
        maquillaje.filter({
            zone: req.query.zone
        });

    if (req.query.color)
        maquillaje.filter({
            color: req.query.color
        });

    if (req.query.price)
        maquillaje.filter({
            price: req.query.price
        });

    maquillaje.toArray((err, result) => {
        res.render('index', {
            titulo: 'Tonymoly',
            maquillaje: result
        });
    });
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

/* app.get('/producto/:id', (req, res) => {
    db.collection('maquillaje').find({
            id:  ""+req.params.id+""
        })
        .toArray((err, result) => {
            res.render('producto', {
                  prod: result                
                });
           });
});
*/

app.get('/productosPorIds', (req, res) => {
    console.log('asdas' + req.query.ids);

    var arreglo = req.query.ids.split(',');
    arreglo = arreglo.map(function (id) {
        return new ObjectID(id);
    });
    var product = db.collection('maquillaje')
        .find({
            _id: {
                $in: arreglo
            }
        })
        .toArray((err, result) => {
            res.send(result);
        });
});