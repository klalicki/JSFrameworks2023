import "./App.css";

// Import here
import { useState } from "react";
import statesList from "./assets/states.json";
import countriesList from "./assets/countries.json";

function App() {
  // establishes state object for form data, sets default country and state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    signUpForNewsLetter: false,
  });

  // establishes state to track whether or not form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // handles all input elements in the form
  const handleChange = (event) => {
    // select handler based on type of input
    if (event.target.type === "checkbox") {
      // special handler for checkbox (using 'checked' property instead of 'value')
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      //standard handler for all other input types
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  // submit handler: stops page from refreshing, and sets the IsSubmitted flag to true
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-4"
      method="POST"
    >
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label
          htmlFor="firstName"
          className="control-label"
        >
          First Name
        </label>
        <input
          onChange={handleChange}
          value={formData.firstName}
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="lastName"
          className="control-label"
        >
          Last Name
        </label>
        <input
          onChange={handleChange}
          value={formData.lastName}
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="addressLine1"
          className="control-label"
        >
          Address Line 1
        </label>
        <input
          onChange={handleChange}
          value={formData.addressLine1}
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label
          htmlFor="city"
          className="control-label"
        >
          City / Town
        </label>
        <input
          onChange={handleChange}
          value={formData.city}
          id="city"
          name="city"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="state"
          className="control-label"
        >
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select
          onChange={handleChange}
          value={formData.state}
          id="state"
          name="state"
          className="form-control"
        >
          {statesList.map((item) => {
            return (
              <option
                key={`state-${item}`}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label
          htmlFor="postalCode"
          className="control-label"
        >
          Zip / Postal Code
        </label>
        <input
          onChange={handleChange}
          value={formData.postalCode}
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="country"
          className="control-label"
        >
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          onChange={handleChange}
          value={formData.country}
          id="country"
          name="country"
          className="form-control"
        >
          {countriesList.map((item) => {
            return (
              <option
                key={`country-${item}`}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          onChange={handleChange}
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          checked={formData.signUpForNewsLetter}
          className="form-check-input"
        />
        <label
          htmlFor="signUpForNewsLetter"
          className="form-check-label"
        >
          Sign Up For Newsletter
        </label>
      </div>
      <div
        className={`alert ${
          formData.signUpForNewsLetter ? "alert-success" : "alert-danger"
        }`}
      >
        {formData.signUpForNewsLetter
          ? "Thank you for signing up for our newsletter!"
          : "Please sign up for our newsletter!"}
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>

      {/* shows this element only if the form has been submitted */}
      {isSubmitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {Object.values(formData).map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
