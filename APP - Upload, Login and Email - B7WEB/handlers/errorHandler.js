exports.notFound = (req, res, next) => {
	res.status = 404;
	res.render('404');
}