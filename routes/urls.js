/*
 *		Urls.js Router
 */
 
exports.render = function(req, res){
  	res.render('test', { title: 'test', url: req.query['url'] })
};