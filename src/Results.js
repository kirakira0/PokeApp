import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import Questions from "./Questions";


export default function Results() {
    
    // const [poke, setPoke] = useState([]);
    const [typeInfo, setType] = useState([]) // initializes to empty array


    useEffect(() => {
      const url = "https://pokeapi.co/api/v2/type/";
      fetch(url)
        .then(typeData => typeData.json())
        .then(type => setType(type));
    }, []);

    return (
    <Container maxWidth="lg" style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#fffff3'}}>
        <Typography variant="h3" align="center">The Pokemon best suited to fight your enemy is: 
          
        {/* {
            poke.results && poke.results[0].name
        }
        {poke.results &&
          poke.results.map(result => (
            <li key={result.name}>
              <a href={result.url}>
                {result.name}
              </a>
            </li>
          ))} */}
        </Typography>
      </Paper>
    </Container>
    )
}