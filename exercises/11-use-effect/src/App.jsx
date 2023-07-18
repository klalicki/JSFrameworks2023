// Import useEffect here
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [quote, setQuote] = useState("");

  /**
   * Set up your state
   */
  useEffect(() => {
    
    const apiUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
    axios
      .get(apiUrl)
      .then((data) => {
        setQuote(data.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  /**
   * Make an AJAX call with the useEffect hook
   */

  return (
    <body class="bg-warning text-center">
      <img
        src={ronSwansonImage}
        alt=""
        width="450"
        height="423"
        class="mt-4"
      />
      <div class="container">
        {/* Display a loading message */}
        {isLoading && <div>loading...</div>}
        {/* Display an error message if the API fails */}
        {isError && <div>Error: {errorMsg}</div>}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
