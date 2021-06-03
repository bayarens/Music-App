import React from "react" 
import AddSongs from './AddSong'
import {getAllSongs, deleteSong} from './networkRequests'

class Home extends React.Component {
    state = {
        songs: []
    }

    componentDidMount(){
        getAllSongs().then(results => {
            this.setState({ songs: results })
        })
    }

    onClick= (song) => {
        deleteSong(song).then(() =>
        getAllSongs().then(results => {
            this.setState({ songs: results })
        }));
    }

    render(){
        return (
            <div id='mainContainer'>
                <ul className="songList">
                    {this.state.songs.map(song => <li key={song.id}> {song.title} <button onClick={() => this.onClick(song)}>🗑</button> </li>)}
                </ul>
                <AddSongs />
            </div>
        )
    }
}

export default Home