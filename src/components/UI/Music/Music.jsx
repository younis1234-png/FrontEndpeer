import React, { Component, useState } from "react";
import "./music.scss";
import { render } from "@testing-library/react";

// Import your audio file
import song from "../../../assets/audio/2.mp3";

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
        <button onClick={this.playPause}>Play | Pause</button>
      </div>
    );
  }
}

export default Music;
