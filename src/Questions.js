import React, { useEffect, useState } from "react";

import "./FrontPage.css";

export default function Questions(props) {
    const updateInfo = (param) => {
      props.setPokeInfo([...props.pokeInfo, param])
      console.log(props.pokeInfo); 
    }

    const questionsAndAnswers = [
        {
            image: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d",
<<<<<<< HEAD
            question: 'What is your enemy’s defining quality?',
=======
            question: '(0) Which character traits best describes your opponent?',
>>>>>>> 9c15a542fa1e8c8948ed565b2b58002e296d7451
            type: "type",
            answers: [["Stubborn and Hot-Headed", "water"], ["Calm and Quiet", "electric"], ["Arrogant and Selfish", "psychic"], ["Friendly and Attention-Seeking", "ground"], ],
        },
        {
<<<<<<< HEAD
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
=======
            image: "https://i.pinimg.com/originals/aa/9b/ae/aa9bae122db73f0de4ebc8a2a61319fa.jpg",
            question: '(1) How old is your enemy? ',
            type: "growth rates",
            answers: [["5 - 12", "slow"], ["13 - 19", "medium fast"], ["20 - 64", "medium slow"], ["65+ ", "slow"], ],
        },
        {
            image: "https://lh3.googleusercontent.com/proxy/Saw1Vq6lQ6OFn_7B1Dcsi_diST2iXJQp9l8hfrVPfgLmLszd_cwOWHwjTKVaQOCAeCXrTlAW-wBZ4nUSEQYuDXlDbKdZorPIe7d3x7pjioVROcQBdJ4Q ", 
            question: '(2) How does your enemy address real life problems? ',
            type: "Nature",
            answers: [["Carfully planned out solutions", "hasty"], ["Bold Actions", "mild"], ["Ask others for help", "lonely"], ["Ignore problems", "serious"], ],
>>>>>>> 9c15a542fa1e8c8948ed565b2b58002e296d7451
        },
        {
            image: "https://cdna.artstation.com/p/assets/images/images/005/519/152/large/dezra-tayler-3-balls.jpg?1491629359 ", 
            question: '(3) Where is your enemy from? ',
            type: "Habitat",
            answers: [["Suburbs", "rough terrain"], ["City", "cave"], ["Countryside", "urban"], ["I don't know... Hell probably", "water's edge"], ],
        },
        {
            image: "https://i.kym-cdn.com/photos/images/newsfeed/000/938/464/a51.jpg ", 
            question: '(4) How does your enemy perform at work/school? ',
            type: "Characteristics",
            answers: [["Dozes off", "attack"], ["Maintains ungodly focus", "defense"], ["Doesn't show up", "special attack"], ["Quick to get things done", "hp"], ],
        },
        {
            image: "https://www.cartoonbucket.com/wp-content/uploads/2015/05/Pikachu-Eating-Candy.jpg", 
            question: '(5) Lastly, what candy reminds you of your enemy? ',
            type: "Nature",
            answers: [["Sour Patch Kids", "sour"], ["Candy Corn", "dry"], ["Hot Tamales", "spicy"], ["Pixie Stix", "sweet"], ],
        },
       
       
    ]

    return (

        questionsAndAnswers.map(questionAndAnswer => (    
            <div id="question-container" key={questionAndAnswer.question}>
                <img id="question-image-container" src= {questionAndAnswer.image} alt="new"/>
                <div id="question-question-container">{questionAndAnswer.question}</div>
                <div id="question-answer-container">
                    {questionAndAnswer.answers.map(answer => (
                        <div key={answer[0]}>
                            {/* {answer[0]}: {answer[1]} */}
                            <button class="button" onClick={() => updateInfo(answer[1])}>{answer[0]}</button>
                        </div>
                    ))}
                </div>
            </div>
        ))
    )        

}