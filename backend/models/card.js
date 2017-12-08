const mongoose = require('mongoose');
const { Schema } = mongoose;

var cardSchema = new Schema({
    _user	: String,
    city: String,
    expense: String,
    days: String,
    description: String,
    img_url : String,
    latitude: Number,
    longitude: Number
});

mongoose.model('card', cardSchema);
