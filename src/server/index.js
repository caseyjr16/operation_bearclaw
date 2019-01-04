
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'studentAccounts'
});


connection.connect(err => {
    if(err){
        return err;
    }
});

app.use(cors());




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

app.listen(4000, ()=> {
    console.log('Server is listening on port 4000...')
})