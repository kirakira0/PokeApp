import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function Questions(props) {
    const updateInfo = (param) => {
      props.setPokeInfo([...props.pokeInfo, param])
    }

    const questionsAndAnswers = [
        {
            image: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d",
            question: '(0) Which character trait best describes your opponent?',
            type: "type",
            answers: [["Stubborn and Hot-Headed", "water"], ["Calm and Quiet", "electric"], ["Arrogant and Selfish", "psychic"], ["Friendly and Attention-Seeking", "ground"], ],
        },
        {
            image: "https://i.ya-webdesign.com/images/pokemon-clip-small-16.png",
            question: '(1) Question 1',
            type: "type",
            answers: [["ans1", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        },
        {
            image: "https://www.altoonalibrary.org/wp-content/uploads/2019/08/pokemon.jpg", 
            question: '(2) Question 2',
            type: "type",
            answers: [["ans1", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        },
    ]

    return (

        questionsAndAnswers.map(questionAndAnswer => (    
            <Container maxWidth="lg" style={{marginTop: 20}}>      
            <Paper style={{padding: 10, backgroundColor: '#fffff3'}}>
            <Typography variant="h3" align="center">   

            <div key={questionAndAnswer.question}>
                <img src= {questionAndAnswer.image} alt="new"/>
                <div>{questionAndAnswer.question}</div>
                <div>
                    {questionAndAnswer.answers.map(answer => (
                        <div key={answer[0]}>
                            {/* {answer[0]}: {answer[1]} */}
                            <button onClick={() => updateInfo(answer[1])}>{answer[0]}</button>
                        </div>
                    ))}
                </div>
            </div>
            </Typography>
            </Paper>
            </Container>
        ))
    )        

}