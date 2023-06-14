import { useState } from "react";

const LessText = ({ text, maxLength }) => {
  const [isShortened, setIsShortened] = useState(false);

  return (
    <>
      <p>{isShortened ? text.substring(0, maxLength) : text}</p>

      <button
        className="btn btn-dark"
        onClick={() => {
          setIsShortened(false);
        }}
      >
        Read More
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          setIsShortened(true);
        }}
      >
        Read Less
      </button>
    </>
  );
};
export default LessText;
