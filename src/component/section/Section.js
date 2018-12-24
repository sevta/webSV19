import React, { Component } from "react";

export default function Section({
  title,
  divider,
  children,
  textLeft,
  extendClass,
  extendClassText,
  ...rest
}) {
  return (
    <div className={`section container mx-auto mt-20 ${extendClass}`} {...rest}>
      <div
        className={`text-3xl ${
          textLeft ? "text-left" : "text-center"
        } text-grey-darkest font-sans font-bold uppercase mb-10 ${extendClassText}`}
      >
        {title}
      </div>
      {divider && (
        <div className="divider my-16 w-16 h-2 bg-grey-dark mx-auto" />
      )}
      {children}
    </div>
  );
}
