import React, { Component } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Spring, animated } from "react-spring";

export default class Navleft extends Component {
  render() {
    return (
      <Spring
        from={{
          opacity: 0,
          transform: `translateX(-20px)`
        }}
        to={{
          opacity: 1,
          transform: "translateX(0px)"
        }}
      >
        {props => (
          <animated.div style={props}>
            <h1 className="my-5">navleft</h1>
          </animated.div>
        )}
      </Spring>
    );
  }
}
