import React, { Component } from "react";
import { routesPath } from "../utils/routes";
import { Transition, Trail, Spring, animated } from "react-spring";
import { Link } from "react-router-dom";

export default class BurgerMenu extends Component {
  state = {
    toggle: true
  };

  onMenuClick = () => {
    this.setState({ toggle: !this.state.toggle }, () =>
      console.log(this.state)
    );
  };

  render() {
    const { toggle } = this.state;
    return (
      <Spring
        from={{
          width: toggle ? "9%" : "100%"
        }}
        to={{
          width: toggle ? "100%" : "9%"
        }}
      >
        {props => (
          <animated.div
            className={`burger-menu-container ${
              this.props.fluid ? "" : "container mx-auto"
            } p-4 relative bg-white shadow flex flex-wrap items-center flex-start ${
              this.props.extendClass
            }`}
            style={props}
          >
            <BurgerIcon toggle={this.state.show} onClick={this.onMenuClick} />
            {toggle && <BurgerListMenu />}
          </animated.div>
        )}
      </Spring>
    );
  }
}

function BurgerIcon({ toggle, ...rest }) {
  let classesName = `burger-icon w-8 h-6 p-1 ${
    toggle ? "mr-10" : ""
  } cursor-pointer rounded bg-white flex flex-col items-center justify-between`;
  return (
    <div className={classesName} {...rest}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </div>
  );
}

function BurgerLine() {
  return (
    <div
      className="line w-full bg-teal-darker rounded-full"
      style={{
        height: 3
      }}
    />
  );
}

function BurgerListMenu() {
  return (
    <div className="burger-list-menu flex items-center -mt-1 ml-24 absolute pin-y">
      <Trail
        items={routesPath}
        config={{
          tension: 150,
          friction: 14
        }}
        from={{
          opacity: 0,
          transform: "translateY(4px)"
        }}
        to={{
          opacity: 1,
          transform: "translateY(0)"
        }}
      >
        {route => props => (
          <Link
            to={route.path}
            style={props}
            className="burger-list-menu_path text-blue-darker no-underline mr-10 capitalize cursor-pointer font-sans"
          >
            {route.name}
          </Link>
        )}
      </Trail>
    </div>
  );
}
