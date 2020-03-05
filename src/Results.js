import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import Questions from "./Questions";


export default function Results(props) {
    
    const qualifiedPokemon = props.qualifiedPokemon;
    const questionProperty = props.questionProperty; 
    const [typeInfo, setPokeType] = useState([]) // initializes to empty array
 
    useEffect(() => {
      const url = qualifiedPokemon;
      fetch(url)
        .then(typeResults => typeResults.json())
        .then(p => setPokeType(p));
    }, [qualifiedPokemon]);
    
    const pokeProperty = qualifiedPokemon.split("/")[qualifiedPokemon.split("/").length - 2]; 
 
    if (pokeProperty == "type") {
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

    if (pokeProperty == "growth-rate") {
      return (
          <Container maxWidth="lg" style={{marginTop: 20}}>
          <Paper style={{padding: 20, backgroundColor: '#fffff3'}}>
              <p>The Pokémon best suited to fight your enemy is/are:</p>
              <div>
              {typeInfo.pokemon_species &&
                typeInfo.pokemon_species.map(result => (
                <p>
                  <li key={result.name}>
                    <a href={result.url}>
                        {result.name}
                    </a>
                  </li>
                </p>)
                )}
              </div>
          </Paper>
        </Container> 
      )    
    }

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