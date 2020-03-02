import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function Results() {

    //structure of the questions and answers {question: [api-value, [answer1, value], [answer2, value]]}
    var questions = [
        "Which character trait best describes your opponent?",
        "Question 2",
        "Question 3"
    ]
    var answers = [
        ["type", ["Stubborn and Hot-Headed", "water"], ["Calm and Quiet", "electric"], ["Arrogant and Selfish", "psychic"], ["Friendly and Attention-Seeking", "ground"], ],
        ["happiness", ["op1", "type1"], ["op2", "type2"], ["op3", "type3"], ["op4", "type4"]]
    ]

    var images = [
        "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d",
        "https://i.ya-webdesign.com/images/pokemon-clip-small-16.png",
        "https://www.altoonalibrary.org/wp-content/uploads/2019/08/pokemon.jpg"
    ]

    const numbers = [1, 2];


    return (
        
        <Container maxWidth="lg" style={{marginTop: 20}}>
        <Paper style={{padding: 10, backgroundColor: '#fffff3'}}>
            <img src= {images[0]} alt="new"/>
            <Typography variant="h3" align="center">
                {questions[0]}
            </Typography>
            {answers[0].slice(1).map(([x, y]) => <button>{x}</button>)}
        </Paper>
        </Container>  
        
    )        

}