import React, { Component } from "react";
import ReactPlayer from "react-player";

class HomeSection extends Component {
  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <h2>let us embrace change. let us embrace the future</h2>
          <h1><span>“</span>the sky has no limits<span>”</span></h1>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
        </div>
      </section>
    );
  }
}

export default HomeSection;
