const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'luciano',
    password: '200801hxx',
    database: 'nexsys',
    port: 3306,
};

async function conectarEBuscarDados() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Conexão estabelecida com sucesso!');
        // Exemplo de consulta:
        const [rows] = await connection.execute('SELECT * FROM usuarios');
        console.log(rows);
        return rows;
    } catch (error) {
        console.error('Erro ao conectar ou buscar dados:', error);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

module.exports = { conectarEBuscarDados };