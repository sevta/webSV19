import React, { Component } from "react";
import OsLayout from "../OS/layout/OsLayout";
import wallpaper from "./wallpaper.jpeg";
const wall1 = "https://i.imgur.com/aodIB86.jpg";
const wall2 = "https://images3.alphacoders.com/621/621682.jpg";
import { AppContext } from "../utils/provider";
import Notepad from "../OS/notepad/Notepad";
import CV from "../OS/CV/CV";

export default class OsPage extends Component {
  static contextType = AppContext;

  render() {
    const { state } = this.context;
    const desktopStyle = {
      position: "absolute",
      top: 0,
      height: "100vh",
      width: "100%",
      zIndex: -1
    };
    return (
      <OsLayout>
        <div className="desktop-background" style={desktopStyle}>
          <img
            src={state.selectedWallpaper}
            alt=""
            className="w-full h-full absolute pin-t pin-l"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: -1
            }}
          />
          <Notepad />
        </div>
      </OsLayout>
    );
  }
}
