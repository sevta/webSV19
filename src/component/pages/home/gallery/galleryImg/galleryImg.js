import React from "react";
import { Img } from "the-platform";
import "./style.scss";

function Spinner() {
  return (
    <img
      style={{
        width: 140,
        height: 140
      }}
      src="https://cdn.dribbble.com/users/372537/screenshots/2065624/icons_km_weather.gif"
    />
  );
}

export default function GalleryImg({ src }) {
  return (
    <React.Suspense fallback={<Spinner />} maxDuration={400}>
      <Img
        className="gallery-img m-2 w-full h-full flex-1 rounded"
        style={{ objectFit: "cover", objectPosition: "center" }}
        src={src}
      />
    </React.Suspense>
  );
}
