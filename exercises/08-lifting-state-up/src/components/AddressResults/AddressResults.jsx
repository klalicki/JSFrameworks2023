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
  const niceVal = (value) => {
    if (typeof value === "boolean") {
      return value ? "true" : "false";
    } else {
      return value;
    }
    // nested ternary - functional but hard to read
    // const niceVal =
    //   key === "confirm" ? (value ? "true" : "false") : value;
  };
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        {Object.entries(formData).map(([key, value]) => {
          return (
            <li key={key}>
              {key}: {niceVal(value)}
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
