var db = require('../db')
var CommentSchema = require('../models/comment.js')(db.mongoose);

var express = require('express');
var router = express.Router();

router.post('/comment/add', function(req, res, next) {

	db.mongoose.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	db.mongoose.connection.once('open', function() {
		console.log("Connection Successful!");
		var comment = new CommentSchema({
			name: req.body.name,
			email: req.body.email,
			content: req.body.content, 
		});
		// save model to database
		comment.save(function(err, result) {
			if (err) return console.error(err);
			res.status(200).send(result);
		});

	});
});

router.post('/comment/test', function(req, res, next) {
	res.status(200).send({
		message: "Success"
	});
});

module.exports = router;