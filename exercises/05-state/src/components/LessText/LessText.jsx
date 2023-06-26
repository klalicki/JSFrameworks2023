import { useState } from "react";

const LessText = ({ text, maxLength }) => {
  const [isShortened, setIsShortened] = useState(true);

  return (
    <>
      <p>{isShortened ? text.substring(0, maxLength) : text}</p>

      <button
        className="btn btn-dark"
        onClick={() => {
          setIsShortened(!isShortened);
        }}
      >
        {isShortened ? "Read More" : "Read Less"}
      </button>
    </>
  );
};
export default LessText;
