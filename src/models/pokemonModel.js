const dbPool = require('../../config/database');


const getAllPokemon = () => {
    const sqlQuery = 'SELECT * FROM pokedex'
    
    
    return dbPool.execute(sqlQuery);
}

const createNewPokemon = (body) => {
    const sqlQuery = `INSERT INTO pokedex (name, hp, type, energy) 
                      VALUES ('${body.name}', ${body.hp}, '${body.type}', '${body.energy}')`; 

    return dbPool.execute(sqlQuery);
}

const updatePokemon = (body, idPokemon) => {
    const sqlQuery = `UPDATE pokedex SET id=${body.id}, name='${body.name}', hp=${body.hp}, type='${body.type}', energy='${body.energy}' WHERE id=${idPokemon}`;

    return dbPool.execute(sqlQuery);
}

const deletePokemon = (idPokemon) => {
    const sqlQuery = `DELETE FROM pokedex WHERE id=${idPokemon}`;


    return dbPool.execute(sqlQuery);
}


module.exports = {
    getAllPokemon,
    createNewPokemon,
    updatePokemon,
    deletePokemon,
    
}