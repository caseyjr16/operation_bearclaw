const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello mason and Casey')
});

app.listen(4000, ()=> {
    console.log('Server is listening of port 4000...')
})