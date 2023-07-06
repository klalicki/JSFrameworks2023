import "./AddressForm.css";
import PropTypes from "prop-types";

import countries from "../../assets/countries";
import states from "../../assets/states";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - setDisplayResults()
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 * - a callback function(s) for setting first name, last name, etc.
 */
function AddressForm({ setDisplayResults, formData, setFormData }) {
  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
   *
   */

  // using one handler for all elements
  const handleInput = (e) => {
    // select handler based on type of input
    if (e.target.type === "checkbox") {
      // special handler for checkbox (using 'checked' property instead of 'value')
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      //standard handler for all other input types
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayResults(true);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-4"
    >
      <div className="mb-3">
        <label
          htmlFor="firstName"
          className="control-label"
        >
          First Name
        </label>
        <input
          onChange={handleInput}
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
          onChange={handleInput}
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
          onChange={handleInput}
          value={formData.addressLine1}
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
        />
        <p className="help-block text-muted">
          Street address, P.O. box, company name, c/o
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
          onChange={handleInput}
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
        <select
          onChange={handleInput}
          value={formData.state}
          id="state"
          name="state"
          className="form-control"
        >
          <option></option>
          {states.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
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
          onChange={handleInput}
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
        <select
          onChange={handleInput}
          value={formData.country}
          id="country"
          name="country"
          className="form-control"
        >
          <option></option>
          {countries.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
        </select>
      </div>
      <div className="mb-3">
        <input
          onChange={handleInput}
          checked={formData.confirm}
          id="confirm"
          name="confirm"
          type="checkbox"
          className="form-check-input"
        />
        <label
          htmlFor="confirm"
          className="form-check-label"
        >
          Sign Up For Newsletter
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

AddressForm.propTypes = {
  setDisplayResults: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  // And others that you will need to pass in
  // To learn more about PropTypes, please refer to https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default AddressForm;
