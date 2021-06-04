import React from "react";
import { addSong, updateSong } from './networkRequests';

class AddSong extends React.Component {
    state = {
        title: "",
        artist: "",
        duration: "",
        album: "",
        tracklist: "",
        features: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = async () => {
        if (!this.props.editMode) {
            await addSong(this.state);
        }
        else {
            await updateSong(this.state);
            this.props.clearEdit()
        }
        this.props.refresh()
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.editMode && !prevProps.editMode) {
            this.setState(this.props.editMode)
        }
    }

    render() {
        console.log(this.props.editMode)
        return (
            <div className='add-song-wrap'>
                <h1>{this.props.editMode ? "Edit Song" : "Add Song"}</h1>
                <label>Title: </label>
                <input onChange={this.handleChange} name="title" value={this.state.title}></input>
                <label>Artist: </label>
                <input onChange={this.handleChange} name="artist" value={this.state.artist}></input>
                <label>Duration: </label>
                <input onChange={this.handleChange} name="duration" value={this.state.duration}></input>
                <label>Album: </label>
                <input onChange={this.handleChange} name="album" value={this.state.album}></input>
                <label>Tracklist: </label>
                <input onChange={this.handleChange} name="tracklist" value={this.state.tracklist}></input>
                <label>Features: </label>
                <input onChange={this.handleChange} name="features" value={this.state.features}></input>

                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default AddSong;