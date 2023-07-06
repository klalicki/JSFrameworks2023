/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults({ formData, setDisplayResults }) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        {Object.entries(formData).map(([key, value]) => {
          // format the boolean value to be a nice string
          let niceVal;
          if (typeof value === "boolean") {
            niceVal = value ? "true" : "false";
          } else {
            niceVal = value;
          }
          // nested ternary - functional but hard to read
          // const niceVal =
          //   key === "confirm" ? (value ? "true" : "false") : value;
          return (
            <li key={key}>
              {key}:{niceVal}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setDisplayResults(false);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default AddressResults;
