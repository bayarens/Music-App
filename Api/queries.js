const Pool = require('pg').Pool;

const pool = new Pool({
    user: "bayleyarens",
    password: "postgres",
    host: "127.0.0.1",
    database: "music",
    port: 5432
})

const getMusic = (request, response) => {
    pool.query('SELECT * FROM songs', (error, result) => {
        if(error){
            throw error;
        }
        console.log(result)
        response.status(200).json(result.rows);
    });
}

const addMusic = (request, response) => {
    console.log(request.body, "<---")
    const { title, artist, duration, album, tracklist, features } = request.body;

    pool.query(
        `INSERT INTO songs (title, artist, duration, album, tracklist, features) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [ title, artist, duration, album, tracklist, features ],
        (error, results) => {
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        }
    )
}

const deleteSongsbyId = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`DELETE FROM songs WHERE id=${id}`, (error, resuslts) => {
        if(error){
            throw error
        }
        response.status(200).json(resuslts.rows)
    })
}

module.exports = {
    getMusic: getMusic,
    addMusic: addMusic,
    deleteSongsbyId: deleteSongsbyId
};