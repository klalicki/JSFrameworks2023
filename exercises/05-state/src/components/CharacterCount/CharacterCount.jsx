import { Fragment, useState } from "react";

const CharacterCount = () => {
  const [charCount, setCharCount] = useState(0);

  const handleChange = (event) => {
    const count = event.target.value.length;
    setCharCount(count);
  };
  return (
    <>
      <p>Character Count: {charCount}</p>
      <textarea onChange={handleChange}></textarea>
    </>
  );
};
export default CharacterCount;
