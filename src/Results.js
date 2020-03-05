import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import Questions from "./Questions";


export default function Results(props) {
    
    const qualifiedPokemon = props.qualifiedPokemon;
    const [typeInfo, setPokeType] = useState([]) // initializes to empty array
    console.log("Qualified pokemon is: " + qualifiedPokemon); 
    //const url = qualifiedPokemon;
    useEffect(() => {
     const url = "https://pokeapi.co/api/v2/type/water";
      // const url = qualifiedPokemon;
      console.log("STRING URL IS: " + "https://pokeapi.co/api/v2/type/water")
      console.log("Url from props is: " + qualifiedPokemon);
      console.log("The strings are equalivalent: " + (qualifiedPokemon === "https://pokeapi.co/api/v2/type/water") )
      fetch(url)
        .then(typeResults => typeResults.json())
        .then(p => setPokeType(p));
    }, []);
    console.log("Qualified type is: " + typeInfo); 
    console.log("The strings are equalivalent: " + (qualifiedPokemon === "https://pokeapi.co/api/v2/type/water") )


    return (
    <Container maxWidth="lg" style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#fffff3'}}>
          <p>The Pokémon best suited to fight your enemy is/are:</p>
          <div>
            {/* {qualifiedPokemon} */}
          {typeInfo.pokemon &&
            typeInfo.pokemon.map(result => (
            <p>
              <li key={result.name}>
                <a href={result.pokemon.url}>
                    {result.pokemon.name}
                </a>
              </li>
            </p>)
            )}
          </div>
      </Paper>
    </Container>
    )
}