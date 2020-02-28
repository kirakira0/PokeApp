import React, { useEffect, useState } from "react";
import Header from "./Header";
import Results from "./Results";
import Map from "./Map";
import Questions from "./Questions";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Results />
      <Map />
      <Questions />
    </div>
  );
}
