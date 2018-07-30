import React, { Component } from "react";
import Graphic1 from "./../../../assets/img/layout/graphic1.svg";
import Graphic1mobile from "./../../../assets/img/layout/graphic1mobile.svg";
import Graphic2 from "./../../../assets/img/layout/graphic2.svg";
import Graphic2mobile from "./../../../assets/img/layout/graphic2mobile.svg";
import BrandPyramid from "./../../../assets/img/layout/brandPyramid.svg";

class BrandSection extends Component {
  render() {
    return (
      <section id="brand">
        <h3>
          <BrandPyramid />
        </h3>
        <Graphic1 className="desktop" />
        <Graphic1mobile className="mobile" />
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
        <Graphic2 className="desktop" />
        <Graphic2mobile className="mobile" />
        <div className="twoColumned mobile">
          <p>
            <span>[1] brandcore</span>
            <br />
            The national symbol / icon flying on the international skies.
            Mexicana portrays Mexico and the best of present, the spirit of the
            past and the positiveness of the future. Mexico is Mexicana.
          </p>
          <p>
            <span>[2] brandenvironment</span>
            <br />
            Innovation, trend / modernity, freshness, care/ consumer
            orientation, ease + flexibility + low friction, speed,
            out-of-the-box thinking, pride.
          </p>
          <p>
            <span>[3] brandphotosphere</span>
            <br />
            A strong emphasis on emotional comfort with a nice ambience is key
            to all targets and passenger classes. Relaxing atmospheres, improved
            cabin look and feel, and attention to details.
          </p>
          <p>
            <span>[4] brandgravity</span>
            <br />
            Claiming new territories: Claim own territories by focusing on
            flexibility and Network Hubs; Mexicana takes you “wherever you
            want”. The new OneWorld alliance is the entrance to worldwide
            connectivity.
          </p>
          <p>
            <span>[5] brandmagnitude</span>
            <br />
            e.g.: Segment A: We are the new way to travel, in which
            point-to-point personalized service, warmth, and comfort are most
            important. This is why we offer specific alternatives that allow our
            passengers to enjoy the travel experience that best adapts to them
          </p>
        </div>
      </section>
    );
  }
}

export default BrandSection;
