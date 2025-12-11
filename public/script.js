const API_URL = 'http://localhost:3000/alunos';
const form = document.getElementById('alunoForm');
const mensagem = document.getElementById('mensagem');

// Carrega alunos ao abrir a página
document.addEventListener('DOMContentLoaded', carregarAlunos);

// Submete o formulário
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, curso })
        });

        if (response.ok) {
            mostrarMensagem('Aluno adicionado com sucesso!', 'sucesso');
            form.reset();
            carregarAlunos();
        } else {
            mostrarMensagem('Erro ao adicionar aluno', 'erro');
        }
    } catch (error) {
        console.error('Erro:', error);
        mostrarMensagem('Erro na requisição', 'erro');
    }
});

// Carrega e exibe a lista de alunos
async function carregarAlunos() {
    try {
        const response = await fetch(API_URL);
        const alunos = await response.json();
        
        const tbody = document.getElementById('alunosList');
        tbody.innerHTML = '';

        if (alunos.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #999;">Nenhum aluno cadastrado</td></tr>';
            return;
        }

        alunos.forEach(aluno => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.curso}</td>
                <td class="actions">
                    <button class="btn btn-danger" onclick="excluirAluno(${aluno.id})">Excluir</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar alunos:', error);
        mostrarMensagem('Erro ao carregar alunos', 'erro');
    }
}

// Exclui um aluno
async function excluirAluno(id) {
    if (!confirm('Tem certeza que deseja excluir este aluno?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            mostrarMensagem('Aluno excluído com sucesso!', 'sucesso');
            carregarAlunos();
        } else {
            mostrarMensagem('Erro ao excluir aluno', 'erro');
        }
    } catch (error) {
        console.error('Erro:', error);
        mostrarMensagem('Erro na requisição', 'erro');
    }
}

// Exibe mensagem temporária
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    
    setTimeout(() => {
        mensagem.className = 'mensagem';
    }, 3000);
}