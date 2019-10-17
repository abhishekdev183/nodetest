require('./models/db');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const movieinfo = require('./routes/movieinfo');
const path = require('path');
const ebar = require('express-handlebars');
require('./models/modalSchema');
const mdb = mongoose.model('movieinfos');
const bodyParser = require('body-parser');
// 
const port = process.env.PORT || 3000;
// 

// middelwares
app.use('/',movieinfo);
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// config the handelbar engine
app.engine('hbs',ebar({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname + '/public/views'}));
app.set('view engine','hbs');
// 

app.post('/submit',(req,res)=>{
    insertdata(req,res);
});

function insertdata(req,res) {
    var moviedb = new mdb();
    moviedb.Name = req.body.movieName;
    moviedb.Img = req.body.movieUrl;
    moviedb.Summary = req.body.movieSummary;
    moviedb.save((err,docs)=>{
        if(!err){
            res.redirect('/list');
        }
        else{
            console.log(err);
            
        }
    });
}
app.get('/list',(req,res)=>{
    mdb.find((err,docs)=>{
        if(!err){
            res.render('../public/views/movies/list',{list:docs});
        }
        else{
            console.log(err);
        }
    })
});
app.listen(port,()=>{
    console.log('server is running');
});