import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function Results() {
    
    const [poke, setPoke] = useState([]);

    useEffect(() => {
      const url = "https://pokeapi.co/api/v2/pokemon-species?limit=50";
      fetch(url)
        .then(r => r.json())
        .then(p => setPoke(p));
    }, []);

    return (
    <Container maxWidth="lg" style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#fffff3'}}>
        <Typography variant="h3" align="center">The Pokemon best suited to fight your enemy is: 
        {
            poke.results && poke.results[0].name
        }
        {/* {poke.results &&
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