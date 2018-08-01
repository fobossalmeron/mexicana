import React, { Component } from "react";
import Nav from "./Nav";
import HomeSection from "./presentational/HomeSection";
import NoLimitSection from "./presentational/NoLimitSection";
import BrandSection from "./presentational/BrandSection";
import ReBrandingSection from "./presentational/ReBrandingSection";
import ProcessSection from "./presentational/ProcessSection";
import OportunitySection from "./presentational/OportunitySection";
import EngageSection from "./presentational/EngageSection";
import scrollToComponent from "react-scroll-to-component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOn: false,
      maintenance: true
    };
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  hideNav() {
    this.setState({ menuOn: false });
  }

  initScrollMagic() {
    const script = document.createElement("script");
    script.src = "assets/js/scrollmagic.js";
    script.async = true;
    document.body.appendChild(script);
  }

  quitMaintenance() {
    this.setState({ maintenance: false });
    this.initScrollMagic();
  }

  componentDidMount() {
    if (this.state.maintenance == false) {
      this.initScrollMagic();
    }
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
          <h3>case: mexicana</h3>
          <h2>website under construction</h2>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    );
    var app = (
      <div>
        <Nav
          toggleMenu={this.toggleMenu.bind(this)}
          hideNav={this.hideNav.bind(this)}
          menuOn={this.state.menuOn}
          scrollToHome={() =>
            scrollToComponent(this.Home, { offset: 0, align: "top" })
          }
          scrollToNoLimit={() =>
            scrollToComponent(this.NoLimit, { offset: -45, align: "top" })
          }
          scrollToBrand={() =>
            scrollToComponent(this.Brand, { offset: -45, align: "top" })
          }
          scrollToReBranding={() =>
            scrollToComponent(this.ReBranding, { offset: -45, align: "top" })
          }
          scrollToProcess={() =>
            scrollToComponent(this.Process, { offset: -45, align: "top" })
          }
          scrollToOportunity={() =>
            scrollToComponent(this.Oportunity, { offset: -45, align: "top" })
          }
          scrollToEngage={() =>
            scrollToComponent(this.Engage, { offset: -45, align: "top" })
          }
        />
        <HomeSection
          ref={section => {
            this.Home = section;
          }}
        />
        <NoLimitSection
          ref={section => {
            this.NoLimit = section;
          }}
        />
        <BrandSection
          ref={section => {
            this.Brand = section;
          }}
        />
        <ReBrandingSection
          ref={section => {
            this.ReBranding = section;
          }}
        />
        <ProcessSection
          ref={section => {
            this.Process = section;
          }}
        />
        <OportunitySection
          ref={section => {
            this.Oportunity = section;
          }}
        />
        <EngageSection
          ref={section => {
            this.Engage = section;
          }}
        />
      </div>
    );
    var doRenderApp = this.state.maintenance ? maintenanceScreen : app;
    return doRenderApp;
  }
}

export default App;
