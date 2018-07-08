var mysql = require('mysql');

var connectionMySql = function() {
    console.log('conexão com bd estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node_project'
    });
}

module.exports = function() {
    console.log('modulo "db_connection.js" carregado com sucesso')
    return connectionMySql;
}