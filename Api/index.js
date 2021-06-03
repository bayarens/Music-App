const express  = require('express');
const app = express();
const db = require('./queries.js');
const port = 3030;
const bodyparser = require("body-parser");
const cors = require("cors");


app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/', (request, response) => {
    response.json({ info: "songs in the database" })
});

app.get('/artists', (request, response) => { 
    response.json({ info: "artist in the database"})
});

app.get('/songs', db.getMusic);

app.post('/songs', db.addMusic);

app.delete('/songs/:id', db.deleteSongsbyId)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});