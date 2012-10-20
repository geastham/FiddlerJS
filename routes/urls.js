/*
 *		Urls.js Router
 */
 
var Browser = require("zombie");
 
exports.render = function(req, res){
	// Load the page from localhost
	browser = new Browser()
	browser.visit(req.query['url'], function () {
		// Show me the document contents.
		console.log(browser.html());
		res.send(browser.html());
	});

  	//res.render('test', { title: 'test', url: req.query['url'] })
};