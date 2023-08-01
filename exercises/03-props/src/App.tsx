import "./App.css";
import Welcome from "./components/Welcome";
import Heading from "./components/Heading";
// import something here
import { ReactNode } from "react";
function App():ReactNode {
  return (
    <div className="App">
      <Heading>Welcome to my React App!</Heading>
      <Welcome name="Kristoff" />
    </div>
  );
}

export default App;
