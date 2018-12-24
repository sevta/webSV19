import React, { Component } from "react";
import { AppContext } from "../../utils/provider";

export class ContextMenu extends Component {
  static contextType = AppContext;

  render() {
    const { x, y } = this.props;
    return (
      <div
        className="rounded-sm text-xs shadow bg-white px-5 "
        style={{
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export function ContextMenuItem({ name, ...rest }) {
  return (
    <div className="contextmenu-item cursor-pointer my-3 font-sans" {...rest}>
      {name}
    </div>
  );
}
