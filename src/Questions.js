import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function Results() {

    //structure of the questions and answers {question: [api-value, [answer1, value], [answer2, value]]}
    var questions = [
        "Which character trait best describes your opponent?"
    ]
    var answers = [
        ["type", ["Stubborn and Hot-Headed", "water"], ["Calm and Quiet", "electric"], ["Arrogant and Selfish", "psychic"], ["Friendly and Attention-Seeking", "ground"], ],
    ]

    var images = [
        "https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
    ]
    
    return (
        <Container maxWidth="lg" style={{marginTop: 20}}>
        <Paper style={{padding: 10, backgroundColor: '#fffff3'}}>
            <img src= {images[0]} alt="new"/>
            <Typography variant="h3" align="center">
                {questions[0]}
            </Typography>
            <button>{answers[0][1][0]}</button>
            <button>{answers[0][2][0]}</button>
            <button>{answers[0][3][0]}</button>
            <button>{answers[0][4][0]}</button>
        </Paper>
      </Container>
    
    )
}