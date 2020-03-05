import React, { useEffect, useState } from "react";
import Header from "./Header";
import Results from "./Results";
import Map from "./Map";
import Questions from "./Questions";
import "./FrontPage.css";


export default function App() {
  //Qualified Pokemon setter, initialised to an empty array

  return (
    <div className="App" id="App">
      <Header />
      <Questions/>
      {/* <Results/> */}
      <Map />
    </div>
  );
}
