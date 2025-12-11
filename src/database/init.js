// Script para inicializar o banco de dados SQLite

// Importa o driver SQLite3
const db = require('./db');

// Comando SQL para criar a tabela
// IF NOT EXISTS evita erros se a tabela já existir
const criarTabelaAlunos = `
    CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        curso TEXT NOT NULL
    );
`;

// Executa o comando para criar a tabela


db.run(criarTabelaAlunos, (err) => {
    if (err) {
        console.error('Erro ao criar a tabela alunos:', err.message);
    } else {
        console.log('Tabela alunos criada ou já existente.');
    }   
});
/* isso caso queira inserir dados iniciais no banco de dados
db.all('SELECT * FROM alunos', (err, linhas) => {
    if (err) {
        console.error('Erro ao consultar alunos:', err.message);
        return;
    } else {
        console.log('Alunos existentes no banco de dados:', linhas);
    }
});

const inserirAluno = db.prepare('INSERT INTO alunos (nome, curso) VALUES (?, ?)');

inserirAluno.run('João', 'Engenharia', (err) => {
    if (err) console.error('Erro ao inserir aluno João:', err.message);
    else console.log('Aluno João inserido com sucesso.');
});

inserir.finalize();
*/
