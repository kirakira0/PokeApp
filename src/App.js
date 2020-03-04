import React, { useEffect, useState } from "react";
import Header from "./Header";
import Results from "./Results";
import Map from "./Map";
import Questions from "./Questions";
import "./FrontPage.css";


export default function App() {
  const [pokeInfo, setPokeInfo] = useState([]) // initializes to empty array
  const [qualifiedPokemon, setQualifiedPokemon] = useState([])
  const [pokeType, setPokeType] = useState()

  return (
    <div className="App" id="App">
      <Header />
      <Questions pokeInfo={pokeInfo} setPokeInfo={setPokeInfo} />
      <Results typeInfo={pokeType} setPokeType={setPokeType}/>
      <Map />
    </div>
  );
}
