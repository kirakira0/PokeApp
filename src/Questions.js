import React, { Component } from "react";
import Display from './Display';

//import Answers from "./Answers";

//import { render } from "react-dom";

class Questions extends Component {
  state = {
    questions: [
      {
        id: 1,
        content: "What is your enemy’s defining quality?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        ),
        answers: [
          {
            type: "Water",
            content: "Relaxed"
          },
          {
            type: "Fire",
            content: "Anger"
          },
          {
            type: "Electric",
            content: "Friendly"
          }
        ]
      },
      {
        id: 2,
        content: "How does your enemy address real life problems? ",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        ),
        answers: [
          {
            type: "Water",
            content: "Relaxed"
          },
          {
            type: "Fire",
            content: "Anger"
          },
          {
            type: "Electric",
            content: "Friendly"
          }
        ]
      },
      {
        id: 3,
        content: "In a large group of people, what role does your enemy take?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        ),
        answers: [
          {
            type: "Water",
            content: "Relaxed"
          },
          {
            type: "Fire",
            content: "Anger"
          },
          {
            type: "Electric",
            content: "Friendly"
          }
        ]
      },
      {
        id: 4,
        content: "How does your enemy perform under stress?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        ),
        answers: [
          {
            type: "Water",
            content: "Relaxed"
          },
          {
            type: "Fire",
            content: "Anger"
          },
          {
            type: "Electric",
            content: "Friendly"
          }
        ]
      },
      {
        id: 5,
        content: "How willing to lie is your enemy?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        ),
        answers: [
          {
            type: "Water",
            content: "Relaxed"
          },
          {
            type: "Fire",
            content: "Anger"
          },
          {
            type: "Electric",
            content: "Friendly"
          }
        ]
      },
      {
        id: 6,
        content: "Is your enemy more left or right brained?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        ),
        answers: [
          {
            type: "Water",
            content: "Relaxed"
          },
          {
            type: "Fire",
            content: "Anger"
          },
          {
            type: "Electric",
            content: "Friendly"
          }
        ]
      },
      {
        id: 7,
        content: "How much does your enemy care about appearances?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        ),
        answers: [
          {
            type: "Water",
            content: "Relaxed"
          },
          {
            type: "Fire",
            content: "Anger"
          },
          {
            type: "Electric",
            content: "Friendly"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="app container">
        <Display questions={this.state.questions} />
      </div>
    );
  }
}

export default Questions;
