import "./App.css";
// Import LessText here
import LessText from "./components/LessText/LessText";
// Import CharacterCount here
import CharacterCount from "./components/CharacterCount/CharacterCount";

//Import GuessTheNumber
import GuessTheNumber from "./components/GuessTheNumber/GuessTheNumber";

import TempConverter from "./components/TempConverter/TempConverter";

function App() {
  return (
    <>
      <div className="container">
        <TempConverter valueF={60} />
      </div>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText
          text="This is my sample text for my Less Text component"
          maxLength={5}
        />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/* Add CharacterCount here */}
          <CharacterCount />
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 3 - Guessing The Number</h1>
        {/* Add GuessingTheNumber here */}
        <GuessTheNumber />
      </div>
    </>
  );
}

export default App;
