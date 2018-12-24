import React, { Component } from "react";
import { Spring, animated, config } from "react-spring";
import Navbar from "../navbar/navbar";
import Navbar2 from "../navbar2/Navbar2";
import Footer from "../footer/footer";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { AppContext } from "../utils/provider";

export default class Layout extends Component {
  static contextType = AppContext;

  renderSelectedNavbar = () => {
    const { state } = this.context;
    if (state.selectedNavbar == 1) {
      return <Navbar />;
    } else if (state.selectedNavbar == 2) {
      return <Navbar2 />;
    } else if (state.selectedNavbar == 3) {
      return (
        <div className="container mx-auto">
          <BurgerMenu extendClass="mt-10 mb-20" />
        </div>
      );
    } else {
    }
  };

  render() {
    const { state } = this.context;
    return (
      <Spring
        config={config.slow}
        from={{
          opacity: 0,
          transform: "translateY(-30px)",
          // transform: 'scale(1.8)' ,
          transformOrigin: "center"
        }}
        to={{
          opacity: 1,
          transform: "translateY(0)",
          // transform: 'scale(1)' ,
          transformOrigin: "center"
        }}
      >
        {props => (
          <animated.div style={props} {...this.props}>
            {this.renderSelectedNavbar()}
            {this.props.children}
            <Footer />
          </animated.div>
        )}
      </Spring>
    );
  }
}
