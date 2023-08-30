/**
 * STOP! You will not modify the code that is in the file.
 * Instead, you will be writing the unit tests for this exercise
 * inside `App.test.js`
 */

import { useState } from "react";
import Links from "../Links/Links";

function App() {
  const [text, setText] = useState("");
  const [href, setHref] = useState("");

  const [links, setLinks] = useState([
    {
      text: "React Testing Library Cheatsheet",
      href: "https://testing-library.com/docs/react-testing-library/cheatsheet",
    },
    {
      text: "Matchers for DOM (rendered React)",
      href: "https://www.npmjs.com/package/@testing-library/jest-dom",
    },
    {
      text: "Matchers for Vanilla JavaScript",
      href: "https://jestjs.io/docs/expect",
    },
  ]);
  const addLink = () => {
    const newLink = {
      text: text,
      href: href,
    };
    setLinks([...links, newLink]);
  };

  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="container mt-4">
      <h1>My Links</h1>
      <form className="row row-cols-md-auto align-items-end mb-3">
        <div className="col-12">
          <label htmlFor="text" className="col-form-label">
            Link Title
          </label>
          <input
            type="text"
            id="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="href" className="col-form-label">
            Link
          </label>
          <input
            type="url"
            id="href"
            className="form-control"
            value={href}
            onChange={(e) => setHref(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            data-testid="button-add"
            onClick={addLink}
          >
            Add Link
          </button>
        </div>
      </form>

      <div className="lead">Here are my favorite sites:</div>
      {!isHidden && <Links links={links} />}

      <button
        type="button"
        className="btn btn-outline-primary"
        data-testid="button-hide"
        onClick={() => setIsHidden(true)}
      >
        Hide Links
      </button>
    </div>
  );
}

export default App;
