var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */

router.get('/delete', function(req, res) {
	var url_name = req.query.url_name;
	models.Page.remove({"url_name": url_name}, function() {
		res.redirect('/');
	});
});

router.get('/:url', function(req, res) {
	var url_name = req.params.url;

	models.Page.findOne({'url_name': url_name}, function(err, docs) {
		res.render('wiki', {'docs': docs});
	});
});

module.exports = router;
