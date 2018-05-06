const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine','hbs');
app.set('views','./views');

app.use('/css',express.static('css'))

app.get("/", function (req, res) {
    res.render('index', {
        titulo: 'Tonymoly'
    });
});

app.listen(3000, function () {
    console.log('Listening port 3000');
});