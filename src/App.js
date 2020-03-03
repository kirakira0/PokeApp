import React, { useEffect, useState } from "react";
import Header from "./Header";
import Results from "./Results";
import Map from "./Map";
import Questions from "./Questions";
import "./FrontPage"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Questions />
      <Results />
      <Map />
    </div>
  );
}
