import React, { Component } from "react";
import HamburgerIcon from "svg-react-loader?name=HamburgerIcon!../../assets/img/layout/hamburger.svg";
import DesignSuccess from "svg-react-loader?name=DesignSuccess!../../assets/img/layout/designSuccess.svg";
import DesignSuccessMobile from "svg-react-loader?name=DesignSuccess!../../assets/img/layout/designSuccessMobile.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuToggled: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    document.body.classList.toggle("restrictBody");
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchmove", this.touchmove);
    function touchstart(e) {
      e.preventDefault();
    }
    function touchmove(e) {
      e.preventDefault();
    }
    this.props.closeModal();
  }

  doHideNav() {
    this.setState({ menuToggled: false });
    document.body.classList.remove("restrictBody");
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchmove", this.touchmove);
    this.props.closeModal();
  }

  componentDidMount() {
    if (typeof this.props.relativePath !== "undefined") {
      this.setState({ relative: true }, () => this.navScrollMagic());
    } else {
      this.navScrollMagic();
    }
  }

  doScrollToHome() {
    this.props.closeModal();
    if (typeof this.props.scrollToHome !== "undefined") {
      event.preventDefault();
      this.props.scrollToHome();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#home");
      }
    }
  }

  doScrollToNoLimit() {
    this.props.closeModal();
    if (typeof this.props.scrollToNoLimit !== "undefined") {
      event.preventDefault();
      this.props.scrollToNoLimit();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#no-limit");
      }
    }
  }

  doScrollToBrand() {
    this.props.closeModal();
    if (typeof this.props.scrollToBrand !== "undefined") {
      event.preventDefault();
      this.props.scrollToBrand();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#brand");
      }
    }
  }

  doScrollToReBranding() {
    this.props.closeModal();
    if (typeof this.props.scrollToReBranding !== "undefined") {
      event.preventDefault();
      this.props.scrollToReBranding();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#rebranding");
      }
    }
  }

  doScrollToProcess() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToProcess !== "undefined") {
      event.preventDefault();
      this.props.scrollToProcess();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#process");
      }
    }
  }

  doScrollToOportunity() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToOportunity !== "undefined") {
      event.preventDefault();
      this.props.scrollToOportunity();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#oportunity");
      }
    }
  }

  doScrollToEngage() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToEngage !== "undefined") {
      event.preventDefault();
      this.props.scrollToEngage();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#contact");
      }
    }
  }

  navScrollMagic() {
    var controllerX = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 0 }
    });
    var logoScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 20
    })
      .setClassToggle("header", "headerScroll")
      .addTo(controllerX);
  }

  render() {
    var baseUrl = this.state.relative ? this.props.relativePath : "";
    var active = this.state.menuToggled ? "active" : "";

    return (
      <header>
        <div className="headerWrapper">
          <a
            href={"https://designsuccess.com"}
            className="hideText"
          >
            <DesignSuccess className="designSuccessLogo" />
            <DesignSuccessMobile className="designSuccessLogoMobile" />
            design:success
          </a>

          <HamburgerIcon
            id="hamburger"
            className={active}
            onClick={() => this.toggleMenu()}
          />
          <nav className={active} onClick={() => this.closeNav()}>
            <ul>
            <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToNoLimit();
                }}
              >
                <a href={baseUrl + "#no-limit"}>no limit</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToBrand();
                }}
              >
                <a href={baseUrl + "#brand"}>the brand</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToReBranding();
                }}
              >
                <a href={baseUrl + "#rebranding"}>rebranding</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToProcess();
                }}
              >
                <a href={baseUrl + "#process"}>process</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToOportunity();
                }}
              >
                <a href={baseUrl + "#oportunity"}>oportunity</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToEngage();
                }}
              >
                <a href={baseUrl + "#contact"}>contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
