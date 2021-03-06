import React from "react"
import AddSongs from './AddSong'
import { getAllSongs, deleteSong } from './networkRequests'

class Home extends React.Component {
    state = {
        songs: [],
        editMode: null
    }

    clearEditMode = () => {
        this.setState({ editMode: null })
    }

    componentDidMount() {
        this.refresh()
    }

    refresh = () => {
        getAllSongs().then(results => {
            this.setState({ songs: results })
        })
    }

    onClickD = (song) => {
        deleteSong(song).then(() =>
            this.refresh())
    }

    onClickU = (song) => {
        this.setState({ editMode: song })
    }

    render() {
        return (
            <div className='mainContainerWrapper'>
                <div>
                    <h1 id='title'>The Playlist App</h1>
                </div>
                <div id='mainContainer'>
                    <div id='songlistContainer'>
                        <h2 className='title'>The Playlist</h2>
                        <ul className="songList">
                            {this.state.songs.map(song => <li className='playlist' key={song.id}> <span>{song.title}</span> <button className='Button' onClick={() => this.onClickD(song)}>🗑</button> <button className='Button' onClick={() => this.onClickU(song)} >🔧</button> </li>)}
                        </ul>
                    </div>
                    <AddSongs editMode={this.state.editMode} refresh={this.refresh} clearEdit={this.clearEditMode} />
                </div>
            </div>
        )
    }
}

export default Home