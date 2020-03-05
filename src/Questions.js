import React, { useEffect, useState } from "react";

import "./FrontPage.css";
import Results from "./Results";

export default function Questions() {
    
    const [qualifiedPokemon, setQualifiedPokemon] = useState("")
    const [questionProperty, setQuestionProperty] = useState("")

    const questionsAndAnswers = [
        {
            image: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d",
            question: 'What is your enemy’s defining quality?',
            property: "type",
            answers: [["Stubborn and Hot-Headed", "https://pokeapi.co/api/v2/type/water"], 
                ["Calm and Quiet", "https://pokeapi.co/api/v2/type/electric"], 
                ["Arrogant and Selfish", "https://pokeapi.co/api/v2/type/psychic"], 
                ["Friendly and Attention-Seeking", "https://pokeapi.co/api/v2/type/ground"], ],
        },

        {
            image: "https://pbs.twimg.com/media/CpXa0q4XEAAMRTa.jpg", 
            question: 'How does your enemy address real life problems?',
            baseURL: "https://pokeapi.co/api/v2/nature/",
            answers: [["Carefully", "hasty"], ["Boldly", "mild"], ["They ask others for help", "lonely"], ["They don't", "type4"], ],
        },
        {
            image: "https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/07/pokemon-masters-brings-3-on-3-trainer-battles-to-mobile-this-summer.jpg", 
            question: 'How does your enemy perform at work/school?',
            baseURL: "https://pokeapi.co/api/v2/characteristic/",
            answers: [["They doze off", "type1"], ["They are focused and methodical", "type2"], ["They don't show up", "type3"], ["They are very efficient", "type4"], ],
        },
        {
            image: "https://i.pinimg.com/originals/aa/9b/ae/aa9bae122db73f0de4ebc8a2a61319fa.jpg ",
            question: 'How old is your enemy?',
            property: "growth-rate",
            answers: [["0-12", "https://pokeapi.co/api/v2/growth-rate/fast"], 
                ["13-19", "https://pokeapi.co/api/v2/growth-rate/medium"], 
                ["20-64", "https://pokeapi.co/api/v2/growth-rate/slow"], 
                ["65+", "https://pokeapi.co/api/v2/growth-rate/slow"], ],
        },
        {
            image: "https://cdna.artstation.com/p/assets/images/images/005/519/152/large/dezra-tayler-3-balls.jpg?1491629359", 
            question: 'Where is your enemy from?',
            property: "pokemon-habitat",
            answers: [["Suburbs", "https://pokeapi.co/api/v2/pokemon-habitat/rough-terrain"], 
                ["City", "https://pokeapi.co/api/v2/pokemon-habitat/cave"], 
                ["Countryside ", "https://pokeapi.co/api/v2/pokemon-habitat/urban"], 
                ["Hell, probably", "https://pokeapi.co/api/v2/pokemon-habitat/waters-edge"], ],
        },
       
    ]

    return (
        <div>
            {questionsAndAnswers.map(questionAndAnswer => (    
                <div id="question-container" key={questionAndAnswer.question}>
                    <img id="question-image-container" src= {questionAndAnswer.image} alt="new"/>
                    <div id="question-question-container">{questionAndAnswer.question}</div>
                    <div id="question-answer-container">
                        {questionAndAnswer.answers.map(answer => (
                            <div key={answer[0]}>
                                {<button class="button" onClick={() => {
                                    setQualifiedPokemon(answer[1]); 
                                    setQuestionProperty(questionAndAnswer.property);
                                }}>
                                {answer[0]}</button>}
                            </div>
                        ))}
                        
                    </div>
                </div>
            ))}
            <Results qualifiedPokemon = {qualifiedPokemon} questionProperty = {questionProperty} />
        </div>
    )        

}