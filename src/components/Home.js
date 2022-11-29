import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setData(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    // <>hello</>
    <div className="mainCont">
      <h1 className="pageTitle">Poke Lables</h1>
      <div className="cardCont">
        {data
          ? data.map((e) => {
              return (
                <div className="pokeCard" key={data.indexOf(e)}>
                  <h1 className="pokeTitle">{e.name}</h1>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
