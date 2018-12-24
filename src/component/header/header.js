import React, { Component } from "react";
import "./style.scss";
import { Img } from "the-platform";

export default class header extends Component {
  render() {
    return (
      <div className="header w-full realtive h-screen flex items-center justify-center mt-10 mb-16">
        <React.Suspense fallback={<h1>Loading...</h1>} maxDuration={400}>
          <Img
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
            src={
              "https://images.pexels.com/photos/311716/pexels-photo-311716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
          />
        </React.Suspense>
      </div>
    );
  }
}
