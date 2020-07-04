var db = require('../db')
var CommentSchema = require('../models/comment.js')(db.mongoose);

var express = require('express');
var router = express.Router();

router.post('/comment/add', function(req, res, next) {

	db.mongoose.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).catch(error => {
		res.status(500).send(error);

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
			if (err) return res.status(500).send(err);
			res.status(200).send(result);
		});

	}).catch(error => {
		res.status(500).send(error);
	});
});

module.exports = router;