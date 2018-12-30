var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'bearclaw',
      password : '',
      database : 'operation_bearclaw'
    }
  });