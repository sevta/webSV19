import React, { Component } from "react";
import { AppContext } from "../utils/provider";

export default class Config extends Component {
  static contextType = AppContext;

  onChange = e => {
    const { setState } = this.context;
    let value = e.target.value;
    setState({ selectedNavbar: value });
    console.log(value);
  };

  componentDidMount = () => {
    document.body.addEventListener("drop", this.onDrop, false);
    document.body.addEventListener("dragover", this.onDragOver, false);
  };

  componentWillMount = () => {
    document.body.removeEventListener("drop", this.onDrop, false);
    document.body.removeEventListener("dragover", this.onDragOver, false);
  };

  onDragOver = e => {
    console.log("dragover", e);
    e.preventDefault();
    return false;
  };

  onDrop = e => {
    console.log("drop", e);
    let offset = e.dataTransfer.getData("text/plain").split(",");
    console.log("offset", offset);
    let dm = document.querySelector("#config");
    dm.style.left = e.clientX + parseInt(offset[0], 10) + "px";
    dm.style.top = e.clientY + parseInt(offset[1], 10) + "px";
    e.preventDefault();
    return false;
  };

  onDragStart = e => {
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
    const { state, setState } = this.context;
    const styleConfig = {
      backgroundColor: "rgba(255 , 255 , 255 , .8)"
    };
    return (
      <div
        draggable
        data-item="0"
        onDragStart={this.onDragStart}
        id="config"
        className="fixed z-40 cursor-move shadow-lg bg-white rounded pin-t pin-l mt-24 ml-5 p-5 text-black fixed"
      >
        <h4 className="mb-3 uppercase">settings</h4>
        <Input
          onChange={this.onChange}
          defaultValueNavbar={state.selectedNavbar}
        />
        <button
          onClick={() => setState({ lock: true })}
          className="bg-teal-light capitalize w-full py-2 px-4 rounded cursor-pointer mx-auto text-white mt-5 text-center"
        >
          lock
        </button>
      </div>
    );
  }
}

function Input({ defaultValueNavbar, ...rest }) {
  return (
    <div className="mb-2">
      <label className="mr-2 font-bold">navbar</label>
      <select
        {...rest}
        className="w-64 px-3 py-2 border-b focus:outline-none cursor-pointer"
        value={defaultValueNavbar}
      >
        <option value="1">navbar 1</option>
        <option value="2">navbar 2</option>
        <option value="3">navbar 3</option>
      </select>
    </div>
  );
}
