import React, { Component } from "react";

export default class CV extends Component {
  render() {
    return (
      <div
        className="w-64 h-64 shadow-lg bg-white rounded p-3 z-40"
        style={{
          width: 400,
          height: 600
        }}
      >
        <div className="cv-username">
          <div className="text-xl uppercase border-2 border-grey-dark mx-auto text-center p-3">
            sevta saputra
          </div>
        </div>
      </div>
    );
  }
}
