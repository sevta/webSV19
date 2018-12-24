import React, { Component } from "react";
import { AppContext } from "../../utils/provider";

export default class Notepad extends Component {
  static contextType = AppContext;

  render() {
    const { state } = this.context;
    return (
      <div className="fixed pin-r mt-20 p-5 s-notepad bg-yellow-dark shadow mr-10 text-grey-darkest">
        <div className="notepad-text text-sm rounded-sm capitalize leading-normal">
          <div>Hii {state.username}</div>
          <div>im front end developer based on jakarta</div>
          <div>nice to meet you</div>
        </div>
      </div>
    );
  }
}
