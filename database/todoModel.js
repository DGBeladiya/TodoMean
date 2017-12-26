var config=require("../config/config");
var mongo=require("mongoose");
mongo.connect(config.dbUrl);
var todoSchema=mongo.Schema({
	task:String
});
module.exports=mongo.model("Todo",todoSchema);