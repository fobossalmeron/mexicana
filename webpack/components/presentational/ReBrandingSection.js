import React, { Component } from "react";
import OldMexicanaIcon from "svg-react-loader?name=OldMexicanaIcon!../../../assets/img/layout/oldMexicana.svg";
import NewMexicanaIcon from "svg-react-loader?name=NewMexicanaIcon!../../../assets/img/layout/newMexicana.svg";
import MexicanaClickIcon from "svg-react-loader?name=MexicanaClickIcon!../../../assets/img/layout/mexicanaClick.svg";
import Logo1 from "svg-react-loader?name=Logo1!../../../assets/img/logos/logo1.svg";
import Logo2 from "svg-react-loader?name=Logo2!../../../assets/img/logos/logo2.svg";
import Logo3 from "svg-react-loader?name=Logo3!../../../assets/img/logos/logo3.svg";
import Logo4 from "svg-react-loader?name=Logo4!../../../assets/img/logos/logo4.svg";
import Logo5 from "svg-react-loader?name=Logo5!../../../assets/img/logos/logo5.svg";
import Logo6 from "svg-react-loader?name=Logo6!../../../assets/img/logos/logo6.svg";
import Logo7 from "svg-react-loader?name=Logo7!../../../assets/img/logos/logo7.svg";
import Logo8 from "svg-react-loader?name=Logo8!../../../assets/img/logos/logo8.svg";
import Plane1 from "svg-react-loader?name=Plane1!../../../assets/img/layout/plane1.svg";
import Plane2 from "svg-react-loader?name=Plane2!../../../assets/img/layout/plane2.svg";
import Plane3 from "svg-react-loader?name=Plane3!../../../assets/img/layout/plane3.svg";
import Plane4 from "svg-react-loader?name=Plane4!../../../assets/img/layout/plane4.svg";
import Plane5 from "svg-react-loader?name=Plane5!../../../assets/img/layout/plane5.svg";
import Plane6 from "svg-react-loader?name=Plane6!../../../assets/img/layout/plane6.svg";
import Plane7 from "svg-react-loader?name=Plane7!../../../assets/img/layout/plane7.svg";
import Plane8 from "svg-react-loader?name=Plane8!../../../assets/img/layout/plane8.svg";
import Texture1 from "svg-react-loader?name=Texture1!../../../assets/img/layout/texture1.svg";
import Texture2 from "svg-react-loader?name=Texture2!../../../assets/img/layout/texture2.svg";
import Texture3 from "svg-react-loader?name=Texture3!../../../assets/img/layout/texture3.svg";
import Texture4 from "svg-react-loader?name=Texture4!../../../assets/img/layout/texture4.svg";
import Graphic3 from "svg-react-loader?name=Graphic3!../../../assets/img/layout/graphic3.svg";

class ReBrandingSection extends Component {
  render() {
    return (
      <section id="rebranding">
        <div className="whiteRebranding">
          <div className="twoColumned">
            <span>before</span>
            <span>after</span>
            <div className="image" />
            <div className="image" />
            <OldMexicanaIcon />
            <NewMexicanaIcon />
          </div>
          <div className="oneColumned">
            <NewMexicanaIcon />
          </div>
          <div className="threeColumned">
            <p>
              Mexicana [Primary]:<br />
              Pantone 303C<br />
              Pantone 2995C
            </p>
            <Logo1 />
            <Logo2 />
            <p>
              Mexicana [Negative]:<br />
              White<br />
              Pantone 303C
            </p>
            <Logo3 />
            <Logo4 />
            <p>
              Mexicana<br />
              [Black & White]:<br />
              Pantone Black 3C<br />
              Pantone Warm Grey 3C
            </p>
            <Logo5 />
            <Logo6 />
            <p>
              Mexicana [Silver]:<br />
              Pantone Metallic 877C
            </p>
            <Logo7 />
            <Logo8 />
          </div>
          <div className="twoColumned withBorder">
            <Plane1 />
            <Plane2 />
            <Plane3 />
            <Plane4 />
          </div>
          <div className="twoColumned textures">
            <Texture1 /> <Texture2 /> <Texture3 /> <Texture4 />
          </div>
          <div className="oneColumned">
            <MexicanaClickIcon />
          </div>
          <div className="twoColumned withBorder">
            <Plane5 />
            <Plane6 />
            <Plane7 />
            <Plane8 />
          </div>
        </div>
        <div className="quote">
          <p>
            Mexicana’s new icon is<br/> an international masterpiece
          </p>
          <h4>Eduardo Nieto Ituarte</h4>
          <h5>
            graphic design professor <span>-</span> Universidad Iberoamericana
          </h5>
        </div>
        <div className="renderGrid">
          <div className="image" />
          <div className="image" />
          <div className="image" />
          <div className="image" />
        </div>
        <div className="encapsulator">
        <h3>project timeline</h3>
        <Graphic3 />
        </div>
      </section>
    );
  }
}

export default ReBrandingSection;
