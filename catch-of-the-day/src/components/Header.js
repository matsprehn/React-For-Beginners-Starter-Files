import React, { Component, Fragment } from "react";

export const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      <span>Catch</span>
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);
