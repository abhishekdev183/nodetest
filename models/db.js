const mongoose = require('mongoose');
const dbApi = "mongodb+srv://nodeuser:node12345678@cluster0-uqle8.mongodb.net/test?retryWrites=true&w=majority";
// 
mongoose.connect(dbApi,{useNewUrlParser:true,useUnifiedTopology: true},(err =>{
    if (!err) {
        console.log('database connected successfuly');
        
    } else {
        console.log(err);
    }
}));
require('./modalSchema');