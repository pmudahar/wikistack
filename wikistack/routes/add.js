var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('add', {"active": "active"});
  // res.send('JUSTIN is JUST an ass');
});

/* POST users listing. */
router.post('/submit', function(req, res) {
	var models = require('../models/');
	var title = req.body.pagetitle;
	var url_name = title.replace(/[\s]/ig, "_").replace(/[\W]/ig,"");
	var body = req.body.pagecontent;

	//adding submit data into models
	var p = new models.Page({ "title": title, "body":body, "url_name": url_name});
	p.save();
	res.redirect('/');
});

module.exports = router;


