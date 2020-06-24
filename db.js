// var mongoose = require("mongoose"); //引入mongoose
// mongoose.connect('mongodb+srv://runrun:tian11@fammedweb-anstl.mongodb.net/pro_guide?retryWrites=true&w=majority');
 
// var db = mongoose.connection;
// db.on('error', function callback() { //监听是否有异常
//     console.log("Connection error");
// });
// db.once('open', function callback() { //监听一次打开
//     //在这里创建你的模式和模型
//     console.log('connected!');
// });
 
// module.exports = mongoose;

var mongoose = require("mongoose");
var url = 'mongodb+srv://runrun:tian11@fammedweb-anstl.mongodb.net/pro_guide?retryWrites=true&w=majority';

var db = {};
db.mongoose = mongoose;
db.url = url;

module.exports = db;
