
router.post('/new', function(req, res, next) {
    res.locals.connection.query('insert into users(firstname,lastname,email) values(','+req.body.firstname+',',','+req.body.lastname+',',','+req.body.email+',')', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});