import React, { Component } from "react";
import Menu from "./menu";
import "./style.scss";

export default class Navbar2 extends Component {
  render() {
    return (
      <div className="navbar2-wrapper w-full flex flex-col items-center justify-center px-12 py-6">
        <Logo />
        <Menu />
      </div>
    );
  }
}

function Logo() {
  return (
    <div className="rounded-full w-24 h-24 border-4 border-black flex items-center justify-center mb-12">
      <div className="text-2xl text-black uppercase font-bold font-sans">
        sv19
      </div>
    </div>
  );
}
