const pokemonModels = require('../models/pokemonModel')

/** Pemanggilan ke database itu bersifat async, sehingga perlu di atasi dengan async-await */
const getAllPokemon = async (req, res) => {
    try {
        /** agar data fields tidak ikut terdeklarasi atau menjadi keluaran yang diharapkan,
        * solusinya adalah Destrukturisasi, atau pengambilan nilai dari data yang disimpan dalam objek atau array
        */
        // const [rows,fields] = await pokemonModels.getAllPokemon();
        // const [rows] = await pokemonModels.getAllPokemon();
        const [data] = await pokemonModels.getAllPokemon();

        res.json({
            messege : 'GET all pokemon success',
            data : data
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            serverMessage: error,
        })
        
    }

}

const createNewPokemon = async(req, res) => {
    const {body} = req 
    try {
        await pokemonModels.createNewPokemon(body);
        res.status(201).json({
            messege : 'CREATE new pokemon success',
            data : body,
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            serverMessage: error,
        })
        
    }
}

const updatePokemon = async (req, res) => {
    const {idPokemon} = req.params
    const {body} = req 
    try {
        await pokemonModels.updatePokemon(body, idPokemon)
        res.json({
            messege : "UPDATE Pokemon success",
            data: {
                id: idPokemon,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            serverMessage: error,
        })
    }
}

const deletePokemon = async (req, res) => {
    const {idPokemon} = req.params;
        
    try {
        await pokemonModels.deletePokemon(idPokemon);
        res.json({
            messege : "DELETE pokemon success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            serverMessage: error,
        })   
    }
}

module.exports = {
    getAllPokemon,
    createNewPokemon,
    updatePokemon,
    deletePokemon,
}