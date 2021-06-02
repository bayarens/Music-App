import React from "react"
import './App.css';

class App extends React.Component {
  state ={
    songs: []
  }

  componentDidMount(){
    fetch("http://localhost:3030/songs")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({ songs: res })
    })
  }

  render(){
  return (
    <div>
      <h2>Songs in my database:</h2>
      <ul>{this.state.songs.map(song => <li key={song.id}>{song.title}</li>)}
      </ul>
    </div>
  );
  }
}

export default App;
