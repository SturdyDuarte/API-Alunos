const express = require('express')
const path = require('path');
const app = express();
const port = 3000;

// Inicializa o banco de dados
require('./database/init');

// permite que o servidor entenda requisições com corpo em JSON
app.use(express.json())

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Importa as rotas dos alunos
const alunoRoutes = require('./routes/alunoRoutes');
app.use("/alunos", alunoRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

