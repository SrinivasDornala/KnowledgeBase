
var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name :{
		type: String,
		index:true,
		required:true	
	},
	description :{
		type: String
	}
	
});

var Category = module.exports=mongoose.model('Category',categorySchema);

module.exports.getCategories=function(callback){
	Category.find(callback);
}

module.exports.getCategorybyId=function(id,callback){
	Category.findById(id,callback);
}

module.exports.getCategorybyCategory=function(category,callback){
	var query = {category:category};
	Category.find(query,callback);
}

module.exports.createCategory=function(newCatagory,callback){
	newCategory.save(callback);
}
