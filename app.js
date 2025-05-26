import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEPopularTabelaUsuarios(nome_completo, email, senha, data_cadastro, cpf, username, funcao) {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });

    await db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_completo TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        data_cadastro TEXT DEFAULT CURRENT_TIMESTAMP,
        cpf TEXT NOT NULL UNIQUE,
        username TEXT NOT NULL UNIQUE,
        funcao TEXT NOT NULL
    );`);

    await db.run(
        `INSERT INTO usuarios (nome_completo, email, senha, data_cadastro, cpf, username, funcao) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [nome_completo, email, senha, data_cadastro, cpf, username, funcao]
    );

    await db.close();
}

// Exemplo de chamada da função
criarEPopularTabelaUsuarios();