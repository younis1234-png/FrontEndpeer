import React, { Component } from "react";
import "./music.scss";
import song from "../../../assets/audio/2.mp3";
import { PlayArrow, Pause } from "@material-ui/icons";

class Music extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }
    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="music">
        <a className="music__play-btn" onClick={this.playPause}>
          {/* {this.state.isPlaying !== false ? <Pause /> : <PlayArrow />} */}
        </a>
      </div>
    );
  }
}

export default Music;
