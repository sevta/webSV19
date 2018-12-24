import React, { Component } from "react";
import "./style.scss";
import GalleryImg from "./galleryImg/galleryImg";
import { AppContext } from "../../../utils/provider";

export default class Gallery extends Component {
  static contextType = AppContext;

  render() {
    const { state } = this.context;

    return (
      <div className="mt-4">
        <div className="gallery-items-container w-100 flex flex-wrap">
          {state.galleryItems.map((item, index) => (
            <GalleryImg key={index} src={item.src} />
          ))}
        </div>
      </div>
    );
  }
}
