const API_URL = 'http://localhost:3000/alunos';
const mensagem = document.getElementById('mensagem');

console.log('Script carregado');

// Carrega alunos ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded disparado');
    
    const form = document.getElementById('alunoForm');
    console.log('Form encontrado:', form);
    
    if (form) {
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
    }
    
    console.log('Chamando carregarAlunos()');
    carregarAlunos();
});

// Carrega e exibe a lista de alunos
async function carregarAlunos() {
    console.log('carregarAlunos() iniciado');
    try {
        console.log('Fazendo fetch para:', API_URL);
        const response = await fetch(API_URL);
        console.log('Response recebido:', response.status);
        
        const alunos = await response.json();
        console.log('JSON parseado:', alunos);
        
        const tbody = document.getElementById('alunosList');
        console.log('tbody encontrado:', tbody);
        
        tbody.innerHTML = '';

        if (alunos.length === 0) {
            console.log('Nenhum aluno encontrado');
            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #999;">Nenhum aluno cadastrado</td></tr>';
            return;
        }

        console.log('Renderizando', alunos.length, 'alunos');
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
        console.log('Alunos renderizados com sucesso');
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