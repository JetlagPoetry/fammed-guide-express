var mongoose = require("mongoose");
var url = 'mongodb+srv://runrun:tian11@fammedweb-anstl.mongodb.net/pro_guide?retryWrites=true&w=majority';

var db = {};
db.mongoose = mongoose;
db.url = url;

module.exports = db;
