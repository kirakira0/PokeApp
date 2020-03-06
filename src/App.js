import React, { useEffect, useState } from "react";
import Header from "./Header";
import Results from "./Results";
import Map from "./Map";
import Questions from "./Questions";
import "./FrontPage.css";


export default function App() {

  return (
    <div className="App" id="App">
      <Header />
      <Questions/>
      {/* Results rendered in Questions */}
      <Map{...Map.mapProps} />
    </div>
  );
}
