import "./App.css";
import Welcome from "./components/Welcome";
import Heading from "./components/Heading";
// import something here

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App!</Heading>
      <Welcome name="Kristoff" />
    </div>
  );
}

export default App;
