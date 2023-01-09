const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'passSup',
    database: 'sup'
})

module.exports = db;