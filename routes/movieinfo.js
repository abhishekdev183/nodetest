const express = require('express');
const routers = express.Router();

// 

routers.get('/',(req,res)=>{
    res.render('../public/views/movies/edit',{viewTitle:'Enter movie record'});
    // res.send('works');
});

// routers.post('/submit',(req,res)=>{
//     console.log(req.body);
// });

module.exports = routers;