// Controller integrado ao banco de dados SQLite
const db = require('../database/db');

// Listar todos os alunos
function listarAlunos (req, res) {
    db.all('SELECT * FROM alunos', (err, linhas) => {
        if (err) res.status(500).json({ mensagem: 'Erro ao listar alunos' });
        res.json(linhas); // Retorna todas as linhas da tabela alunos
    });
}

// Obter um aluno por ID
function obterAlunoPorId(req, res) {
    const id = Number(req.params.id);

    db.get('SELECT * FROM alunos WHERE id = ?', [id], (err, linha) => {
        if (err) return res.status(500).json({ mensagem: 'Erro ao obter aluno' });
        if (!linha) return res.status(404).json({ mensagem: 'Aluno não encontrado' });

        res.json(linha); // Retorna a linha do aluno encontrado
    });
}

// Adicionar um novo aluno
function adicionarAluno(req, res) {
    const { nome, curso } = req.body;

    db.run('INSERT INTO alunos (nome, curso) VALUES (?, ?)', [nome, curso], function(err) {
        if (err) return res.status(500).json({ mensagem: 'Erro ao adicionar aluno' });

        res.status(201).json({ id: this.lastID, nome, curso }); // Retorna o novo aluno com o ID gerado
    });
}

// Atualizar um aluno existente
function atualizarAluno(req, res) {
    const id = Number(req.params.id);
    const { nome, curso } = req.body;

    db.run('UPDATE alunos SET nome = ?, curso = ? WHERE id = ?', [nome, curso, id], function(err) {
        if (err) return res.status(500).json({ mensagem: 'Erro ao atualizar aluno' });
        if (this.changes === 0) return res.status(404).json({ mensagem: 'Aluno não encontrado' });

        res.json({ id, nome, curso }); // Retorna o aluno atualizado
    });
}

// Excluir um aluno
function excluirAluno(req, res) {
    const id = Number(req.params.id);

    db.run('DELETE FROM alunos WHERE id = ?', [id], function(err) {
        if (err) return res.status(500).json({ mensagem: 'Erro ao excluir aluno' });
        if (this.changes === 0) return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        res.json({ mensagem: 'Aluno excluído com sucesso' });
    });
}

module.exports = {
    listarAlunos,
    obterAlunoPorId,
    adicionarAluno,
    atualizarAluno,
    excluirAluno
};