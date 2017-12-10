var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    email		: String,
    password	: String,
    username: {
      type: String,
      default: ''
    },
    followings : [ObjectId],
    followers : [ObjectId],
    description: {
      type: String,
      default: ''
    },
    headpicture: {
      type: String,
      default: ''
    }
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
