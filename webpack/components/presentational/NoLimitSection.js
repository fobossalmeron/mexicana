import React, { Component } from "react";
import ReactPlayer from "react-player";
import SkyLimit from "./../../../assets/img/layout/skyLimit.svg";
import BrandPositioning from "./../../../assets/img/layout/brandPositioning.svg";

class NoLimitSection extends Component {
  render() {
    return (
      <section id="no-limit">
        <ReactPlayer url="https://vimeo.com/277187408" className="fullVideo" />
        <h2>
          <SkyLimit />
        </h2>
        <p>
          <span>challenge:</span>
          <br />
          Reinventing Mexico's national airline; - regaining trust and loyalty.
          <br />
          <br />
          <span>solution:</span>
          <br />
          design:success was trusted to take the newly privatized airline’s
          brand and business and create a total 360-degree a-to-z innovation.
          d:s redesigned literally everything from the company vision, mission,
          business, marketing strategy and customer service to identity, lounges
          – all the way down to the food and napkin selection. 55+
          design:success innovators created it – and in record speed: 8 months
          in total. Industry first.
          <br />
          <br />
          <span>results:</span> <br />
          Brand loyalty from 54% to 88% in less than 14 months. New Positioning
          approval: 92%.
        </p>
        <div className="twoColumned">
          <h3>
            <BrandPositioning />
          </h3>
          <p>
            We are the new way of traveling in which personalized service from
            point to point, warmth and comfort are the most important.<br />
            This is why we offer specific alternatives that allow our passengers
            to enjoy a traveling experience that can adapt the most to them.
          </p>
        </div>
      </section>
    );
  }
}

export default NoLimitSection;
