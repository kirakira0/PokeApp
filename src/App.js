import React, { useEffect, useState } from "react";

export default function App() {
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
