import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function Results() {

    return (
        <Container maxWidth="lg" style={{marginTop: 20}}>
        <Paper style={{padding: 10, backgroundColor: '#fffff3'}}>
            <img src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png" alt="new"/>
            <Typography variant="h3" align="center">
                What is your enemy’s defining quality? 
            </Typography>
            <div>
          <button>Hot-tempered</button>
        </div>
        <div>
          <button>Relaxed</button>
        </div>
        </Paper>
      </Container>
    
    )
}