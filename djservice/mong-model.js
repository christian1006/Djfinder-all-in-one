
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var djSchema = new Schema({
    name: {type: String, unique: false, required: true},
    location: {type: String, unique: false},
    price: {type: Number, unique: false},
    style: {type: String, unique: false, required: true},
    dates: {type: Number, unique: false},
    about: {type: String, unique: false}
})

mongoose.model('djs', djSchema)


