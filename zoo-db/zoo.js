var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/zoo')


var zooSchema = mongoose.Schema({

	name		: {type : String, required : true}, 
	diet 		: {type : String, required : true},

})



var Animal = mongoose.model('Animal', zooSchema);

var Visitor = mongoose.model('Visitor', )