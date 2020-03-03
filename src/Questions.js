import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function Questions(props) {
    const updateInfo = (param) => {
      props.setPokeInfo([...props.pokeInfo, param])
      console.log(props.pokeInfo); 
    }

    const questionsAndAnswers = [
        {
            image: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d",
            question: 'What is your enemy’s defining quality?',
            type: "type",
            answers: [["Stubborn and Hot-Headed", "water"], ["Calm and Quiet", "electric"], ["Arrogant and Selfish", "psychic"], ["Friendly and Attention-Seeking", "ground"], ],
        },
        {
            image: "https://i.pinimg.com/originals/aa/9b/ae/aa9bae122db73f0de4ebc8a2a61319fa.jpg ",
            question: 'How old is your enemy?',
            type: "type",
            answers: [["ans1", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        },
        {
            image: "https://pbs.twimg.com/media/CpXa0q4XEAAMRTa.jpg", 
            question: 'How does your enemy address real life problems?',
            type: "type",
            answers: [["ans1", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        },
        {
            image: "https://cdna.artstation.com/p/assets/images/images/005/519/152/large/dezra-tayler-3-balls.jpg?1491629359", 
            question: 'Where is your enemy from?',
            type: "type",
            answers: [["ans1", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        },
        {
            image: "https://i.kym-cdn.com/photos/images/newsfeed/000/938/464/a51.jpg ", 
            question: 'How does your enemy perform at work/school?',
            type: "type",
            answers: [["ans1", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        },
        {
            image: "https://www.cartoonbucket.com/wp-content/uploads/2015/05/Pikachu-Eating-Candy.jpg ", 
            question: 'What candy reminds you of your enemy?',
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