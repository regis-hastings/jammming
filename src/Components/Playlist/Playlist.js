import React from 'react';
import './Playlist.css';
import TrackList from './Components/TrackList'

class Playlist extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input defaultValue={'New Playlist'} />
        {/* Add a TrackList component */}
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;