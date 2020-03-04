import React, { useEffect, useState } from "react";

import "./FrontPage.css";

export default function Questions(props) {
    const updateInfo = (param) => {
      props.setPokeInfo([...props.pokeInfo, param])
      props.setPokeType([...props.pokeType, param])
      console.log(props.pokeInfo); 
    }

    const questionsAndAnswers = [
        {
            image: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d",
            question: 'What is your enemy’s defining quality?',
            baseURL: "https://pokeapi.co/api/v2/type/",
            answers: [["Stubborn and Hot-Headed", "water"], ["Calm and Quiet", "electric"], ["Arrogant and Selfish", "psychic"], ["Friendly and Attention-Seeking", "ground"], ],
        },
        {
            image: "https://i.pinimg.com/originals/aa/9b/ae/aa9bae122db73f0de4ebc8a2a61319fa.jpg ",
            question: 'How old is your enemy?',
            baseURL: "https://pokeapi.co/api/v2/growth-rate/",
            answers: [["0-12", "fast"], ["13-19", "medium"], ["20-64", "slow"], ["65+", "slow"], ],
        },
        // {
        //     image: "https://pbs.twimg.com/media/CpXa0q4XEAAMRTa.jpg", 
        //     question: 'How does your enemy address real life problems?',
        //     baseURL: "https://pokeapi.co/api/v2/nature/",
        //     answers: [["Carefully", "hasty"], ["Boldly", "mild"], ["They ask others for help", "lonely"], ["They don't", "type4"], ],
        // },
        {
            image: "https://cdna.artstation.com/p/assets/images/images/005/519/152/large/dezra-tayler-3-balls.jpg?1491629359", 
            question: 'Where is your enemy from?',
            baseURL: "https://pokeapi.co/api/v2/pokemon-habitat/",
            answers: [["Suburbs", "rough-terrain"], ["City", "cave"], ["Countryside ", "urban"], ["Hell, probably", "waters-edge"], ],
        },
        // {
        //     image: "https://i.kym-cdn.com/photos/images/newsfeed/000/938/464/a51.jpg ", 
        //     question: 'How does your enemy perform at work/school?',
        //     baseURL: "https://pokeapi.co/api/v2/characteristic/",
        //     answers: [["They doze off", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        // },
        // {
        //     image: "https://www.cartoonbucket.com/wp-content/uploads/2015/05/Pikachu-Eating-Candy.jpg ", 
        //     question: 'What candy most reminds you of your enemy?',
        //     baseURL: "type",
        //     answers: [["ans1", "type1"], ["ans2", "type2"], ["ans3", "type3"], ["ans4", "type4"], ],
        // },
       
    ]

    return (

        questionsAndAnswers.map(questionAndAnswer => (    
            <div id="question-container" key={questionAndAnswer.question}>
                <img id="question-image-container" src= {questionAndAnswer.image} alt="new"/>
                <div id="question-question-container">{questionAndAnswer.question}</div>
                <div id="question-answer-container">
                    {questionAndAnswer.answers.map(answer => (
                        <div key={answer[0]}>
                            {<button class="button">{answer[0]}</button>}
                            {/* <button class="button" onClick={() => updateInfo(answer[1])}>{answer[0]}</button> */}

                        </div>
                    ))}
                </div>
            </div>
        ))
    )        

}