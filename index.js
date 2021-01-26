var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static(('static')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
});



app.listen(PORT, () => {
    console.log('listening on port', PORT);
});