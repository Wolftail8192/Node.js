const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const path = require ('path');
const {engine} = require('express-handlebars');

app.use (express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout:false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res)=>{
    res.render('login.hbs');
})

app.post('/login', (req,res)=>{
    console.log(req.body);
})

app.listen (5200, () => {
    console.log('Server has stared on port 5200');
})