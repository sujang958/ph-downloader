var express = require('express');
var app = express();
var phAPI = require('@justalk/pornhub-api');
var resultsPH = require('./router/resultsPH');

const PORT = process.env.PORT || 3000;


app.use(express.static(('static')));
app.use(express.json());
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
});

app.get('/resultsPH', resultsPH);


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});