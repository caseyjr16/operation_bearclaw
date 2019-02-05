
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const app = express();


app.use('/', router);


const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'studentAccounts'
});

//connect to the database


connection.connect(err => {
    if(err){
        return err;
    }
});

//Listen to POST requests to /users
app.post('/users', function(req, res){
    //Get sent data. 
    var user = req.body;
    //Do a MySQL query.
    var query = connection.query('INSERT INTO uesrs SET ?', user, function(err, result){

    });
    res.end('Success');

});


app.get('/', (req, res) =>{
    res.send('Hello Casey and Mason. Go to /users to see users')
});

app.get('/users', (req, res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    });
});

router.get('/casey', (req, res) => {
    res.send("Hello, Casey!")
})

router.post('/submit', function(req, res, next) {
    res.redirect('/index.html');
})

router.post('/new', function(req, res, next) {
    res.locals.connection.query('insert into users(firstname,lastname,email) values(','+req.body.firstname+',',','+req.body.lastname+',',','+req.body.email+',')', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

app.listen(3001, ()=> {
    console.log('Server is listening on port 3001...')
})

module.exports = router;