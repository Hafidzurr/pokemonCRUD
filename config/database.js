const mysql = require('mysql2');

const connectionDb = mysql.createConnection({
    host:"localhost",
    user:"userName",
    password:"passwordName",
    database:"dbName",
});

connectionDb.connect(function(err) {
    if(err) throw err;
});

module.exports = connectionDb;