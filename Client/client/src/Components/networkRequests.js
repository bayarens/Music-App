export const getAllSongs = async () => {
    const songs = await fetch("https://d250e9tqt4cqqq.cloudfront.net/songs");
    return songs.json();
}

export const addSong = async (song) => {
    const holdResponse = await fetch("https://d250e9tqt4cqqq.cloudfront.net/songs", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(song)
    });
    return holdResponse;
}

export const deleteSong = async (song) => {
    const holdResponse = await fetch(`https://d250e9tqt4cqqq.cloudfront.net/songs/${song.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return holdResponse;
}

export const updateSong = async (song) => {
    const holdResponse = await fetch(`https://d250e9tqt4cqqq.cloudfront.net/songs/${song.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song) 
    });
    return holdResponse;
}

