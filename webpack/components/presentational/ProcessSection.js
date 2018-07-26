import React, {Component} from "react";
import Graphic4 from "svg-react-loader?name=Graphic4!./../../../assets/img/layout/graphic4.svg";
import Graphic5 from "svg-react-loader?name=Graphic5!./../../../assets/img/layout/graphic5.svg";

class ProcessSection extends Component {
  render() {
    return (
      <section id="process">
        <h3>
          design<span>:</span>success’ processes
        </h3>
        <div className="threeColumned">
          <p>
            <span>processes</span>
            <br />
            Core group and extended core group workshops. These workshops have
            the purpose of collecting valuable information and to get from first
            hand the current state of areas of the flying experience.<br />
            As well as unify forces to accomplish faster progress and teamwork.
          </p>
          <p>
            <span>phase a-1/</span>
            <br />
            World exploration. The exploration phase will benchmark the current
            and more representative airlines in the world. The exploration will
            cover airport setups, check-in, lounges, in-flight experience i.e.
            (food, entertainment, seating configuration, service) and baggage
            claim.
          </p>
          <p>
            <span>phase b-1/</span>
            <br />
            Project Immersion/Management. The project management phase helps to
            define clients primary teamwork as well as design:success senior
            management assignments and project deadlines definitions.
          </p>
          <p>
            <span>phase c-1/</span>
            <br />
            Core group and extended core group innovation:vision™. Workshop
            Definition of overall desired vision for both airlines with new
            values and attributes
          </p>
          <p>
            <span>phase d-1/</span>
            <br />
            Market research and consumer insights. Obtain insights needed to
            create positioning and concepts and new identity.
          </p>
          <p>
            <span>phase e-1/</span>
            <br />
            Analysis + challenge & opportunity map™. Report for Mexicana and
            Mexicana Click Insights for positioning and concepts. The analysis +
            challenge & opportunity map™.
          </p>
          <p>
            <span>phase f-1/</span>
            <br />
            Base Vision Platform + Strategic Development Conceptual Development
            and position strategies - Proposal with tagline for media
            communication.
          </p>
          <p>
            <span>phase g-1/</span>
            <br />
            Conceptual development. Based upon design:success unique conceptual
            development process with screening from the world exploration.
          </p>
          <p>
            <span>phase h-1/</span>
            <br />
            Mini innovation:lab™.<br /> Identity, profiling, market research.
          </p>
          <p>
            <span>phase i-1/</span>
            <br />
            Final Positioning and Mini Brand Architecture. Final positioning
            with results from mini innovation:lab™
          </p>
          <p>
            <span>phase j-1/</span>
            <br />
            Identity development & optimization. MexicanaClick.
          </p>
          <p>
            <span>phase k-1/</span>
            <br />
            Identity development & optimization. Mexicana
          </p>
        </div>
        <div className="quote">
          <p>Mexicana’s most important value is attitude</p>
          <h4>Ricardo A. Baston</h4>
          <h5>Corporate director of planning and fleet</h5>
        </div>
        <h3>the four pillars</h3>
        <Graphic4 />
        <h3>brand umbrella</h3>
        <Graphic5 />
      </section>
    );
  }
}

export default ProcessSection;
