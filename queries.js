const Pool = require('pg').Pool;

const pool = new Pool({
    user: "bayleyarens",
    host: "127.0.0.1",
    database: "music",
    port: 5432
})

const getMusic = (request, response) => {
    pool.query('SELECT * FROM music', (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(result.rows);
    });
}

const addMusic = (request, response) => {
    console.log(response.body, "<--- request.body")
    const { title, artist, duration } = request.body;

    pool.query(
        [ title, artist, duration],
        (error, results) => {
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        }
    )
}

module.exports = {
    getMusic: getMusic,
    addMusic: addMusic
};