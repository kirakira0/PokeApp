import React, { useEffect, useState } from "react";
import Header from "./Header";
import Results from "./Results";
import Map from "./Map";
import Questions from "./Questions";


export default function App() {
  const [pokeInfo, setPokeInfo] = useState([]) // initializes to empty array

  return (
    <div className="App">
      <Header />
      <Questions pokeInfo={pokeInfo} setPokeInfo={setPokeInfo} />
      <Results />
      <Map />
    </div>
  );
}
