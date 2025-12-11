const express = require('express');
const path = require('path');
const app = express();

// porta configurável via env var
const port = process.env.PORT || 3000;

// Inicializa o banco de dados
require('./database/init');

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rotas
const alunoRoutes = require('./routes/alunoRoutes');
app.use('/alunos', alunoRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Escuta em 0.0.0.0 para expor corretamente dentro do container
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});

