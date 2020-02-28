import React, { useEffect, useState } from "react";

export default function App() {
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
        )
      },
      {
        id: 2,
        content: "How does your enemy address real life problems? ",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        )
      },
      {
        id: 3,
        content: "In a large group of people, what role does your enemy take?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        )
      },
      {
        id: 4,
        content: "How does your enemy perform under stress?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        )
      },
      {
        id: 5,
        content: "How willing to lie is your enemy?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        )
      },
      {
        id: 6,
        content: "Is your enemy more left or right brained?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        )
      },
      {
        id: 7,
        content: "How much does your enemy care about appearances?",
        img: (
          <img
            src="https://i.ya-webdesign.com/images/pokemon-clip-small-16.png"
            alt="new"
          />
        )
      }
    ],
    answers: [
      { id: 1, answer: "Option 1" },
      { id: 2, answer: "Option 2" },
      { id: 3, answer: "Option 3" },
      { id: 4, answer: "Option 4" }
    ]
  };


  const [poke, setPoke] = useState([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon-species?limit=50";
    fetch(url)
      .then(r => r.json())
      .then(p => setPoke(p));
  }, []);

  return (
    <div className="App">
      <h1>Species</h1>
      <ul>
        {poke.results &&
          poke.results.map(result => (
            <li key={result.name}>
              <a href={result.url}>
                {result.name}
                {/* why can't i return any other information? */}
                {result.url.base_happiness}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
