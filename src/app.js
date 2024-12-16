const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const connectionDb = require('../config/database');

const app = express();
const port = config.get('port');

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/api/pokedex', (req, res) => {

    // membuat query
    const getQuery = 'SELECT * FROM pokedex';

    // menjalankan query 
    connectionDb.query(getQuery, (err, result, fields) => {

        // error handling
        if(err){
            return res.status(500).json({message: 'Terdapat kesalahan', error: err})
        }

        res.status(200).json({ succes: true, data: result})
    })
});

app.post('/api/pokedex', (req, res) => {
    
    const data = req.body
    const postQuery = 'INSERT INTO pokedex SET ?'

    connectionDb.query(postQuery,data, (err, result, fields) => {
        
        if(err){
            return res.status(500).json({message: 'Terdapat kesalahan', error: err})
        }

        res.status(200).json({ succes: "Data berhasil ditambahkan", data: req.body})

    })
})


app.put('/api/pokedex/:id', (req, res) =>{

    const data = req.body
    const searchQuery = 'SELECT * FROM pokedex WHERE id = ?';
    const updateQuery = 'UPDATE pokedex SET ? WHERE id = ?';

    connectionDb.query(searchQuery, req.params.id, (err, result, fields) => {
        if(err){
            return res.status(500).json({message: 'Terdapat kesalahan'});
        }
        
        if(result.length) {
            connectionDb.query(updateQuery, [data, req.params.id], (err,result,fields) => {
                if(err) {
                    return res.status(500).json({message: 'Terdapat kesalahan'});
                }
    
                res.status(200).json({ succes: "Data berhasil diupdate"})
            }) 
        } else {
            return res.status(404).json({message: 'Data tidak ditemukan'});
        }
    })
});

app.delete('/api/pokedex/:id', (req, res) => {
    
    const searchQuery = 'SELECT * FROM pokedex WHERE id = ?';
    const deleteQuery = 'DELETE FROM pokedex WHERE id = ?';

    connectionDb.query(searchQuery, req.params.id, (err, result, fields) => {
        if(err){
            return res.status(500).json({message: 'Terdapat kesalahan'});
        }

        if(result.length) {
            connectionDb.query(deleteQuery, req.params.id, (err,result,fields) => {
                if(err) {
                    return res.status(500).json({message: 'Terdapat kesalahan'});
                }
    
                res.status(200).json({ succes: "Data berhasil dihapus"})
            }) 
        } else {
            return res.status(404).json({message: 'Data tidak ditemukan'});
        }
    })
})

app.listen( port, () => console.log(`App listening on port ${port}! http://localhost:${port}`));


