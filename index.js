const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public/main')));
app.use(express.static(path.join(__dirname, 'public/login')));
app.use(express.static(path.join(__dirname, 'public/lk')));
app.use(express.static(path.join(__dirname, 'public/news')));

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/public/main/index.html`);
});
app.get('/login', (req,res) => {
    res.sendFile(`${__dirname}/public/login/index.html`);
});
app.get('/lk', (req,res) => {
    res.sendFile(`${__dirname}/public/lk/lk.html`);
});
app.post('/lk', function(req, res) {
    res.send(req.body);
});
app.get('/news', (req,res) => {
    res.sendFile(`${__dirname}/public/news/index.html`);
});

app.listen(8000, () => {
    console.log('Application listening on port 8000!');
});