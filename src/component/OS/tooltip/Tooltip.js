import React, { Component } from "react";

export default class Tooltip extends Component {
  render() {
    return (
      <div className="os-tool-tip p-3 bg-white rounded absolute pin-r text-blue-darker text-sm font-sans">
        {this.props.children}
      </div>
    );
  }
}
