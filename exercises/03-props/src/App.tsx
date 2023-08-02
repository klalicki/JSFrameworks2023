import "./App.css";
import Welcome from "./components/Welcome";
import Heading from "./components/Heading";
// import something here
import { ReactNode } from "react";
function App(): ReactNode {
  return (
    <div className="App">
      <Heading>
        <h1>this is an element</h1>
        <Welcome name="Kristoff" />
        <Welcome name="Kristoff" />
        <Welcome name="Kristoff" />
      </Heading>
      <Welcome name="Kristoff" />
    </div>
  );
}

export default App;
