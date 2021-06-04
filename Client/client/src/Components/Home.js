import React from "react"
import AddSongs from './AddSong'
import { getAllSongs, deleteSong} from './networkRequests'

class Home extends React.Component {
    state = {
        songs: [],
        editMode: null
    }

    clearEditMode= () => {
        this.setState({ editMode:null }) 
    }

    componentDidMount() {
        this.refresh()
    }

    refresh= () => {
        getAllSongs().then(results => {
            this.setState({ songs: results })
        })
    }

    onClickD = (song) => {
        deleteSong(song).then(() =>
            this.refresh())
    }

    onClickU = (song) => {
        this.setState({ editMode: song})
    }

    render() {
        return (
            <div id='mainContainer'>
                <ul className="songList">
                    {this.state.songs.map(song => <li key={song.id}> {song.title} <button onClick={() => this.onClickD(song)}>🗑</button> <button onClick={() => this.onClickU(song)} >🔧</button> </li>)}
                </ul>
                <AddSongs editMode={this.state.editMode} refresh={this.refresh} clearEdit={this.clearEditMode}/>
            </div>
        )
    }
}

export default Home