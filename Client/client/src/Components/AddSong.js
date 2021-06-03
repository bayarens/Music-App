import React from "react";
import {addSong} from './networkRequests';

class AddSong extends React.Component{
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

    onClick = () => {
        addSong(this.state);
        console.log(this.state)
    }

    render(){
        return(
            <div className='add-song-wrap'>
                <h1>Add Song</h1>
                <label>Title: </label>
                <input onChange={this.handleChange} name="title"></input>
                <label>Artist: </label>
                <input onChange={this.handleChange} name="artist"></input>
                <label>Duration: </label>
                <input onChange={this.handleChange} name="duration"></input>
                <label>Album: </label>
                <input onChange={this.handleChange} name="album"></input>
                <label>Tracklist: </label>
                <input onChange={this.handleChange} name="tracklist"></input>
                <label>Features: </label>
                <input onChange={this.handleChange} name="features"></input>
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default AddSong;