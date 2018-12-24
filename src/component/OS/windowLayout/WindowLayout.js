import React, { Component } from "react";
import { AppContext } from "../../utils/provider";

export default class WindowLayout extends Component {
  static contextType = AppContext;

  render() {
    const { setState } = this.context;
    const windowLayoutStyle = {
      position: "absolute ",
      top: `${this.props.y}px`,
      left: `${this.props.x}px`,
      backgroundColor: "whitesmoke"
    };
    return (
      <div
        className="window-layout bg-white absolute px-3 pb-5 pt-8 rounded shadow-lg overflow-hidden"
        style={windowLayoutStyle}
      >
        <WindowBar
          close={() => setState({ showWindow: false, windowContent: null })}
        />
        {this.props.children}
      </div>
    );
  }
}

function WindowBar({ close }) {
  return (
    <div
      className="window-bar flex w-full justify-end px-2 absolute pin-t pin-l font-bold"
      style={{
        background: "steelblue",
        color: "white"
      }}
    >
      <div className="mx-2 my-1 cursor-pointer" onClick={close}>
        x
      </div>
    </div>
  );
}
