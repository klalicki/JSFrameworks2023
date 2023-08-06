// You will need to import two additional things here
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import CatFact from "./CatFact";
import "./App.css";

function App() {
  return (
    <>
      <img
        src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=6fe0ebd22151102996062fa1287f824c"
        alt="Cat"
        width={500}
        height={300}
      />
      {/* "CatFact" is your async component. Refactor this to use Suspense. Be sure to show loading symbols and handle errors here. */}
      <ErrorBoundary
        fallback={
          <div className="message">Sorry, an unexpected error occurred.</div>
        }
      >
        <Suspense fallback={<div className="message">Loading ...</div>}>
          <CatFact />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
