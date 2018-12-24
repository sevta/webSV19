import React, { Component } from "react";
import thumb from "./*.jpg";
import { AppContext } from "../../utils/provider";

export default class DesktopIcon extends Component {
  state = {
    thumbnail: []
  };

  static contextType = AppContext;

  componentDidMount = () => {
    Object.keys(thumb).map(key => {
      this.state.thumbnail.push({
        name: key,
        img: thumb[key]
      });
    });
    console.log("thumb", thumb);
    this.setState({ thumbnail: this.state.thumbnail }, () => {
      setTimeout(() => {
        let el = document.querySelector("#thumbnail");
        console.log("el", el);
      }, 1000);
    });
    document.body.addEventListener("drop", this.onDrop, false);
    document.body.addEventListener("dragover", this.onDragOver, false);
  };

  onDragOver = e => {
    console.log("dragover", e);
    e.preventDefault();
    return false;
  };

  preview = e => {
    const { setState, state } = this.context;
    let selectImgSrc = e.target.getAttribute("src");
    let origin = window.location.origin;
    let imgPath = origin + selectImgSrc;

    console.log("state task", state.taskBackground);

    /**
     * TODO
     * create task background
     */
    if (state.taskBackground.length !== 0) {
      state.taskBackground.map((task, i) => {
        console.log("task", task);
        if (task.type == "img") {
          // state.taskBackground.type['img'].component = 'bleh'
          console.log(task.type);
          state.taskBackground[i].component = "bleh";
        } else {
          state.taskBackground.push({
            id: state.taskBackground.length + 1,
            type: "img",
            component: null
          });
        }
        setState({ taskBackground: state.taskBackground }, currState =>
          console.log("taskbar", currState)
        );
      });
    } else {
      console.log("push here");
      state.taskBackground.push({
        id: state.taskBackground.length + 1,
        type: "img",
        component: null
      });
      setState({ taskBackground: state.taskBackground }, currState =>
        console.log("taskbar", currState)
      );
    }

    setState({ previewWallpaper: imgPath }, currentState => {
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
                src={currentState.previewWallpaper}
                className="w-full h-full rounded"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="w-full text-center mt-5 font-bold img-name">
              w-1
            </div>
            <button
              onClick={() =>
                setState({ selectedWallpaper: currentState.previewWallpaper })
              }
              className="w-full focus:outline-none text-sm font-sans text-center mt-5 capitalize mx-auto"
            >
              set as wallpaper
            </button>
          </React.Fragment>
        )
      });
    });
  };

  onDrop = e => {
    console.log("drop", e);
    let offset = e.dataTransfer.getData("text/plain").split(",");
    console.log("offset", offset);
    let dm = document.querySelector("#thumbnail");
    console.log("dm", dm);
    dm.style.left = e.clientX + parseInt(offset[0], 10) + "px";
    dm.style.top = e.clientY + parseInt(offset[1], 10) + "px";
    e.preventDefault();
    return false;
  };

  onDragStart = e => {
    console.log("drag start");
    let style = window.getComputedStyle(e.target, null);
    e.dataTransfer.setData(
      "text/plain",
      parseInt(style.getPropertyValue("left"), 10) -
        e.clientX +
        "," +
        (parseInt(style.getPropertyValue("top"), 10) - e.clientY) +
        "," +
        e.target.getAttribute("data-item")
    );
    console.log("event", e);
    console.log("dragStart()", style);
  };

  render() {
    const { thumbnail } = this.state;
    return (
      <div
        className="os-desktopicon mt-5 ml-5 w-full flex flex-col flex-wrap fixed"
        style={{ height: "90vh", width: "auto" }}
      >
        {thumbnail.map((thumb, i) => (
          <Thumbnail
            draggable
            onClick={this.preview}
            extendClasses="thumb-dekstop"
            data-item="0"
            ondrag={this.onDragStart}
            name={thumb.name}
            img={thumb.img}
            key={i + 1}
          />
        ))}
      </div>
    );
  }
}

function Thumbnail({ name, img, extendClasses, ondrag, ...rest }) {
  return (
    <div
      id="thumbnail"
      draggable={true}
      onDragStart={ondrag}
      className={`w-10 z-20 relative flex items-center justify-center h-10 cursor-pointer rounded bg-white ${extendClasses}`}
      style={{ margin: 20 }}
      {...rest}
    >
      <div className="thumb-img-container overflow-hidden rounded shadow w-full h-full">
        <img
          src={img}
          alt=""
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="thumb-name absolute pin-b -mb-6 text-sm font-sans">
        {name}
      </div>
    </div>
  );
}
