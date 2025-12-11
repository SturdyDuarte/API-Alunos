const express = require('express');
const controller = require('../controllers/alunosControllerDB');

// cria o roteador
const router = express.Router();

// Endpoints
router.get('/', controller.listarAlunos);
router.get('/:id', controller.obterAlunoPorId);
router.post('/', controller.adicionarAluno);
router.put('/:id', controller.atualizarAluno);
router.delete('/:id', controller.excluirAluno);

module.exports = router;