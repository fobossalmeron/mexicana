import React, {Component} from "react";
import Graphic6 from "svg-react-loader?name=Graphic6!./../../../assets/img/layout/graphic6.svg";
import Graphic7 from "svg-react-loader?name=Graphic7!./../../../assets/img/layout/graphic7.svg";

class OportunitySection extends Component {
  render() {
    return (
      <section id="oportunity">
        <h3>
          challenge Opportunity<span>™</span>
        </h3>
        <Graphic6 />
        <Graphic7 />
        <div className="quote">
          <p>
            aeronautics was neither an industry nor a science. It was a miracle
          </p>
          <h4>Igor Sikorsky</h4>
        </div>
      </section>
    );
  }
}

export default OportunitySection;
