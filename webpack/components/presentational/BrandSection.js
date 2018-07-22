import React, { Component } from "react";
import Graphic1 from "svg-react-loader?name=Graphic1!../../../assets/img/layout/graphic1.svg";
import Graphic2 from "svg-react-loader?name=Graphic2!../../../assets/img/layout/graphic2.svg";
import BrandPyramid from "svg-react-loader?name=BrandPyramid!../../../assets/img/layout/brandPyramid.svg";

class BrandSection extends Component {
  render() {
    return (
      <section id="brand">
        <h3>
          <BrandPyramid />
        </h3>
        <Graphic1 />
        <div className="twoColumned">
          <p>
            <span>product attribute</span>
            <br />wifi portable DVD player charged iPods, wifi check in
            Assistance with connection flights consumer satisfaction survey
            café-bar-snacks
          </p>
          <p>
            <span>functional benefit</span>
            <br />trendy affordable, easy fresh executive
          </p>
          <p>
            <span>brand personality</span>
            <br />innovative fast, consumer oriented flexible simple fast
            efficient
          </p>
          <p>
            <span>emotional benefit</span>
            <br />pride fun innovative, leader identity
          </p>
          <p>
            <span>core essence</span>
            <br />Mexicana is an icon & an eagle. An eagle is Mexico.
          </p>
        </div>
        <Graphic2 />
      </section>
    );
  }
}

export default BrandSection;
