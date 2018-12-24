import React, { Component } from "react";
import Typing from "react-typing-animation";
import "./style.scss";
import { jsx, css } from "@emotion/core";
import Layout from "../../../component/layout/Layout";
import blog from "./blog.json";

export default class Playground extends Component {
  state = {
    question: "whats your name..",
    username: "",
    value: "",
    blog
  };

  componentDidMount = () => {};

  onTyping = e => {
    let value = e.target.value;
    this.setState({ username: value, value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.value === "--help") {
      this.setState({
        value: "",
        question: (
          <React.Fragment>
            help me :( <br />
            sev --menu : to see menu
          </React.Fragment>
        )
      });
    } else if (this.state.value == "sev --menu") {
      this.setState({
        value: "",
        question: (
          <React.Fragment>
            home <br />
            login <br />
            about <br />
            playground <br />
            what your choice
          </React.Fragment>
        )
      });
    } else if (this.state.value == "home") {
      console.log(this.props);
      this.props.history.push("/");
    } else if (this.state.value == "login") {
      this.props.history.push("/login");
    } else {
      this.setState({
        value: "",
        question: (
          <React.Fragment>
            hello {this.state.username} , what i can help you? <br />
            --help to see
          </React.Fragment>
        )
      });
    }
  };

  render() {
    const { question, value } = this.state;
    return (
      <Layout>
        <div className="container mx-auto mt-10">
          <Header state={this.state} />
          <div className="command p-4 bg-blue-darker w-full overflow-hidden relative rounded-lg">
            <div className="output-container p-5">
              <Typing speed={60}>
                <div className="text-line text-white font-mono leading-normal">
                  {question}
                </div>
              </Typing>
            </div>
            <div className="input-container relative pin-x">
              <div className="logo absolute pin-b mb-4 text-white font-mono ml-5">
                @root
              </div>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="type here"
                  value={value}
                  className="input font-mono w-full focus:outline-none p-4 ml-16"
                  onChange={this.onTyping}
                />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function Header({ state }) {
  return (
    <div className="mb-10">
      <h3 className="mb-4">debug</h3>
      <p>{JSON.stringify(state, null, 5)}</p>
    </div>
  );
}
