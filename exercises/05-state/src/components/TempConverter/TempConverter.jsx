import { Fragment, useState } from "react";

const TempConverter = ({ valueF }) => {
  const [isConverting, setIsConverting] = useState(false);

  const convertFtoC = (valueF) => {
    return (((valueF - 32) * 5) / 9).toFixed(2);
  };
  return (
    <>
      <h2>Temperature Converter</h2>
      <p>
        The value is {isConverting ? convertFtoC(valueF) : valueF} degrees
        {isConverting ? " Celsius" : " Fahrenheit"}.
      </p>
      <button
        className="btn btn-dark"
        onClick={() => {
          setIsConverting(!isConverting);
        }}
      >
        Switch to {isConverting ? "F" : "C"}
      </button>
    </>
  );
};
export default TempConverter;
