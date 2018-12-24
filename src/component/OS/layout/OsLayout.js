import React, { Component } from "react";
import { Spring, animated, config } from "react-spring";
import Menubar from "../menubar/Menubar";
import Dock from "../dock/Dock";
import { ContextMenu, ContextMenuItem } from "../contextmenu/ContextMenu";
import { AppContext } from "../../utils/provider";
import DesktopIcon from "../desktopIcon/DesktopIcon";
import WindowLayout from "../windowLayout/WindowLayout";

export default class OsLayout extends Component {
  state = {
    showContextMenuDesktop: false,
    contextMenu: "desktop",
    x: 0,
    y: 0,
    selectedWallpaper: ""
  };

  static contextType = AppContext;

  componentDidMount = () => {
    const { state } = this.context;
    if (state.enableContextMenu) {
      document
        .querySelector(".os-desktopicon")
        .addEventListener("contextmenu", this.contextMenuThumbnail, false);
      document
        .querySelector(".desktop-background")
        .addEventListener("contextmenu", this.contextMenu, false);
      document.addEventListener("click", this.removeContextMenu, false);
    }
  };

  componentWillUnmount = () => {
    document
      .querySelector(".desktop-background")
      .removeEventListener("contextmenu", this.contextMenu);
    document
      .querySelector(".os-desktopicon")
      .removeEventListener("contextmenu", this.contextMenu);
    document.removeEventListener("click", this.removeContextMenu);
  };

  removeContextMenu = () => {
    this.setState({ showContextMenuDesktop: false });
  };

  contextMenuThumbnail = e => {
    e.preventDefault();
    let selectImgSrc = e.target.getAttribute("src");
    let origin = window.location.origin;
    let imgPath = origin + selectImgSrc;
    console.log("event", imgPath);
    this.setState(
      {
        showContextMenuDesktop: true,
        selectedWallpaper: imgPath,
        contextMenu: "desktop icon",
        x: e.x,
        y: e.y
      },
      () => console.log(this.state)
    );
  };

  contextMenu = e => {
    e.preventDefault();
    this.setState(
      { showContextMenuDesktop: true, contextMenu: "desktop", x: e.x, y: e.y },
      () => console.log(this.state)
    );
    console.log(e);
  };

  preview = () => {
    const { setState, state } = this.context;
    setState({
      showWindow: true,
      windowContent: (
        <React.Fragment>
          <div
            className="window-layout-preview mt-5 px-3 rounded overflow-hidden"
            style={{
              width: 550,
              height: 300
            }}
          >
            <img
              src={this.state.selectedWallpaper}
              className="w-full h-full rounded"
              style={{
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          </div>
          <div className="w-full text-center mt-5 font-bold img-name">w-1</div>
          <button
            onClick={() =>
              setState({ selectedWallpaper: this.state.selectedWallpaper })
            }
            className="w-full focus:outline-none text-sm font-sans text-center mt-5 capitalize mx-auto"
          >
            set as wallpaper
          </button>
        </React.Fragment>
      )
    });
  };

  openProperties = () => {
    const { setState } = this.context;
    setState({
      showWindow: true,
      windowContent: (
        <div className="p-10">
          <div className="text-xl font-sans font-bold">S-OS 0.2</div>
        </div>
      )
    });
  };

  showContextMenu = () => {
    const { setState } = this.context;
    switch (this.state.contextMenu) {
      case "desktop": {
        return (
          <ContextMenu x={this.state.x} y={this.state.y}>
            <ContextMenuItem name="context" />
            <ContextMenuItem
              name="shut down"
              onClick={() => setState({ lock: true })}
            />
            <ContextMenuItem
              name="properties"
              onClick={() => this.openProperties()}
            />
          </ContextMenu>
        );
      }
      case "desktop icon": {
        return (
          <ContextMenu x={this.state.x} y={this.state.y}>
            <ContextMenuItem name="preview" onClick={() => this.preview()} />
            <ContextMenuItem
              name="set wallpaper"
              onClick={() =>
                setState(
                  { selectedWallpaper: this.state.selectedWallpaper },
                  state => console.log(state)
                )
              }
            />
          </ContextMenu>
        );
      }
      default: {
        return (
          <ContextMenu x={this.state.x} y={this.state.y}>
            <ContextMenuItem name="context" />
            <ContextMenuItem
              name="shut down"
              onClick={() => setState({ lock: true })}
            />
            <ContextMenuItem name="properties" />
          </ContextMenu>
        );
      }
    }
  };

  animatedOnStart = () => {
    document.body.style.overflow = "hidden";
  };

  animatedEnd = () => {
    document.body.style.overflow = "auto";
  };

  render() {
    const { state } = this.context;
    const springConfig = {
      config: config.slow,
      from: {
        opacity: 0,
        transform: "scale(1.9)",
        transformOrigin: "center"
      },
      to: {
        opacity: 1,
        transform: "scale(1)",
        transformOrigin: "center"
      },
      onStart: () => this.animatedOnStart(),
      onRest: () => this.animatedEnd()
    };
    return (
      <Spring {...springConfig}>
        {props => (
          <animated.div style={props} className="oslayout pt-10 h-screen">
            <Menubar />
            <DesktopIcon />
            {state.showWindow && (
              <WindowLayout x="300" y="100">
                {state.windowContent}
              </WindowLayout>
            )}
            {this.state.showContextMenuDesktop && this.showContextMenu()}
            {this.props.children}
          </animated.div>
        )}
      </Spring>
    );
  }
}
