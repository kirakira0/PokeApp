import React, { useEffect, useState } from "react";

export default function SpeciesList() {
    const [poke, setPoke] = useState([]);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon-species?limit=50";
        fetch(url)
            .then(r => r.json())
            .then(p => setPoke(p));
    }, []);

    return (
        <div>
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
