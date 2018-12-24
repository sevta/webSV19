import React, { Component } from "react";
import { AppContext } from "../utils/provider";
import "./style.scss";

export default class Popup extends Component {
  static contextType = AppContext;

  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  closePopup = () => {
    const { setState } = this.context;
    setState({ showPopup: false });
  };

  render() {
    return (
      <div
        className="popup fixed pin-y pin-x flex items-center justify-center z-50"
        onClick={this.closePopup}
      >
        <div
          className="inner-popup rounded bg-white w-64-sm py-3 px-5"
          onClick={e => e.stopPropagation()}
        >
          <div className="form">
            <form>
              <Input
                type="text"
                placeholder="username"
                name="username"
                onChange={this.handleChange}
              />
              <Input
                type="password"
                placeholder="password"
                name="password"
                onChange={this.handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function Input({ type, placeholder, ...rest }) {
  return (
    <div className="mb-2">
      <input
        type={type}
        placeholder={placeholder}
        className="border p-3"
        {...rest}
      />
    </div>
  );
}
