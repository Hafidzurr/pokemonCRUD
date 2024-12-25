require('dotenv').config()
const express = require('express');

const pokemonRoutes = require('./routes/pokemonRoute')
const middlewareLogRequest = require('./middleware/pokemonMiddleware')

const app = express();
const port = process.env.PORT || 5000;


app.use(middlewareLogRequest);
app.use(express.json());
app.use('/api/pokedex', pokemonRoutes);

/** 
 * Standar express adalah 
 * app.method(path, handler);
*/

app.listen( port, () => console.log(`App listening on port ${port}! http://localhost:${port}`));


