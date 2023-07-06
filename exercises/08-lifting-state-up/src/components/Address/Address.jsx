import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    confirm: false,
  });

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return (
    <>
      {displayResults ? (
        <AddressResults {...{ setDisplayResults, formData }} />
      ) : (
        <AddressForm {...{ setDisplayResults, formData, setFormData }} />
      )}
    </>
  );
}

export default App;
