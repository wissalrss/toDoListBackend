const express = require('express');
const router = express.Router();
const todosController = require('../Controllers/TodosController');



router.get('/lister', todosController.listerTodos);
router.post('/ajouter', todosController.ajouterTodos);
router.get('/:idtodo/supprimer', todosController.supprimerTodos);
router.post('/:idtodo/modifier', todosController.modifierTodos);


module.exports = router;