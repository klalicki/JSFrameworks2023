// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import axios from "axios";
function App() {
  const [charList, setCharList] = useState([]);
  const [charSelection, setCharSelection] = useState();
  const [currentChar, setCurrentChar] = useState({});

  useEffect(() => {
    const apiURL = "https://rickandmortyapi.com/api/character";
    axios.get(apiURL).then((data) => {
      setCharList(data.data.results);
    });
  }, []);
  useEffect(() => {
    // only run the API call if a character has been selected
    if (charSelection) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${charSelection}`)
        .then((data) => {
          setCurrentChar(data.data);
          console.log(data.data);
        });
    }
    console.log(charSelection);
  }, [charSelection]);
  /**
   * Set up state and make AJAX requests here
   */

  return (
    <div className="container">
      <div
        className="row text-center"
        id="body"
      >
        <h1 id="title-head">{currentChar.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src={currentChar.image}
              alt={currentChar.name}
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select
              id="dropdown"
              type="text"
              value={charSelection}
              onChange={(e) => {
                setCharSelection(e.target.value);
              }}
            >
              {charList.map((char) => {
                return (
                  <option
                    value={char.id}
                    key={`character-${char.id}`}
                  >
                    {char.name}
                  </option>
                );
              })}
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
