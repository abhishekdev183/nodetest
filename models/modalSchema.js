const mongoose = require('mongoose');
const dbSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Img:{
        type:String
    },
    Summary:{
        type:String
    }
});
mongoose.model('movieinfos',dbSchema);