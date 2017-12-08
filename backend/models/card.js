const mongoose = require('mongoose');
const { Schema } = mongoose;

var cardSchema = new Schema({
    _user	: String,
    city: String,
    expense: String,
    days: String,
    description: String
});


mongoose.model('card', cardSchema);
