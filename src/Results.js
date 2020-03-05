import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import Questions from "./Questions";


export default function Results(props) {
     const qualifiedPokemon = props.qualifiedPokemon;
    const [typeInfo, setPokeType] = useState([]) // initializes to empty array
    console.log(qualifiedPokemon); 



    useEffect(() => {
      const url = "https://pokeapi.co/api/v2/type/water";
      fetch(url)
        .then(typeResults => typeResults.json())
        .then(p => setPokeType(p));
    }, []);

    return (
    <Container maxWidth="lg" style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#fffff3'}}>
        <Typography variant="p" align="center">The Pokémon best suited to fight your enemy is/are:         
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
        </Typography>
      </Paper>
    </Container>
    )
}