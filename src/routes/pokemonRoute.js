const express = require('express');
const router =  express.Router();
const pokemonController = require('../controller/pokemonCotroller')

// path API

// CREATE - POST
router.post('/', pokemonController.createNewPokemon);

// READ - GET
router.get('/', pokemonController.getAllPokemon);

// UPDATE - PUT
router.put('/:idPokemon', pokemonController.updatePokemon);

// DFELETE - DELETE
router.delete('/:idPokemon', pokemonController.deletePokemon);

module.exports = router