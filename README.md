# API-Alunos

# 📚 API-Alunos

Uma API RESTful robusta e eficiente, desenvolvida em Node.js, para o gerenciamento de cadastros e dados de estudantes (alunos).

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando uma stack moderna e popular, garantindo escalabilidade e facilidade de manutenção:

| Tecnologia | Descrição |
| :--- | :--- |
| **JavaScript** | Linguagem principal de desenvolvimento. |
| **Node.js** | Ambiente de execução para o backend. |
| **Express** | Framework web para a construção da API. |
| **Docker** | Plataforma de containerização para isolamento de ambiente. |
| **Docker Compose** | Ferramenta para gerenciar e executar aplicações multi-container. |
| **Banco de Dados** | (A ser definido, configure sua conexão no arquivo `.env`.) |

## ✨ Recursos (Endpoints Principais)

A **API-Alunos** suporta as operações CRUD (Create, Read, Update, Delete) essenciais para o gerenciamento de dados de alunos:

| Método | Endpoint | Descrição | |
| :--- | :--- | :--- | :--- |
| `POST` | `/alunos` | Cria um novo registro de aluno. | Ex: `{ "nome": "...", "matricula": "..." }` |
| `GET` | `/alunos` | Retorna a lista completa de todos os alunos. | |
| `GET` | `/alunos/:id` | Retorna os detalhes de um aluno específico pelo seu ID. | |
| `PUT` | `/alunos/:id` | Atualiza as informações de um aluno existente. | |
| `DELETE` | `/alunos/:id` | Remove um aluno do cadastro. | |

## 🛠️ Instalação e Configuração Local

Siga estes passos para ter o projeto rodando em sua máquina local sem o uso de containers Docker.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 14 ou superior recomendada)
* npm (gerenciador de pacotes do Node.js)

### 1. Clonar o Repositório
terminal
`git clone [https://github.com/SturdyDuarte/API-Alunos.git](https://github.com/SturdyDuarte/API-Alunos.git)
cd API-Alunos`

### 2. Instalar Dependências
terminal
`npm install`

### 3. Iniciar o Servidor
Inicie a aplicação executando o arquivo principal dentro do diretório *src*:
`node src/server.js`
A API estará acessível em http://localhost:3000

🐳 Execução com Docker
Se você prefere rodar a aplicação em um ambiente isolado (recomendado para produção ou padronização de ambiente):

Pré-requisitos
Docker

Docker Compose

1. Construir e Rodar os Containers
Execute o seguinte comando no diretório raiz do projeto:

`docker-compose up --build -d`
O flag -d executa os containers em segundo plano.

2. Parar os Containers
Para parar e remover os containers:

`docker-compose down`
👥 Contribuição
Este projeto foi desenvolvido por:

Marcos Duarte

Thiago Pininga

Leonardo Luiz

