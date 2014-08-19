var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */

router.get('/', function(req, res) {
	models.Page.find(function(err, docs){ 
		res.render('index', {title: "Wikistacks", docs: docs});
	});
});

module.exports = router;
