// conexão principal com o banco de dados SQLite

// Importa o driver SQLite3
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define o caminho correto do banco de dados
const dbPath = path.join(__dirname, 'database.sqlite');

// Cria e/ou abre o banco de dados
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        console.log('Banco de dados localizado em:', dbPath);
    }
});

// Exporta o objeto de conexão para ser usado em outros módulos
module.exports = db;


