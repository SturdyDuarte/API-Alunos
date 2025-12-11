// Simulação de Base de Dados
let alunos = [
    { id: 1, nome: 'João', curso: 'Engenharia' },
    { id: 2, nome: 'Maria', curso: 'Medicina' },
    { id: 3, nome: 'Pedro', curso: 'Direito' }
];

// Listar todos os alunos
function listarAlunos (req, res) {
    res.json(alunos);
}

// Obter um aluno por ID
function obterAlunoPorId(req, res) {
    const id = Number(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
}

// Adicionar um novo aluno
function adicionarAluno(req, res) {
    const { nome, curso } = req.body;

    const novoAluno = {
        id: alunos.length + 1,
        nome,
        curso
    };

    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
}

// Atualizar um aluno existente
function atualizarAluno(req, res) {
    const id = Number(req.params.id);
    const { nome, curso } = req.body; 

    const aluno = alunos.find(a => a.id === id);
    if (aluno) {
        aluno.nome = nome;
        aluno.curso = curso;
        res.json(aluno);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    aluno.nome = nome;
    aluno.curso = curso;

    res.json(aluno);
}

// Excluir um aluno
function excluirAluno(req, res) {
    const id = Number(req.params.id); 
    alunos = alunos.filter(a => a.id !== id); 


    res.json({ mensagem: 'Aluno excluído com sucesso' }); 
}

module.exports = {
    listarAlunos,
    obterAlunoPorId,
    adicionarAluno,
    atualizarAluno,
    excluirAluno
};

