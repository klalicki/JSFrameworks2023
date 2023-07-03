import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [list, setList] = useState([]);
  const [curItem, setCurItem] = useState({
    name: "",
    nameIsValid: false,
    price: "",
    priceIsValid: false,
    nameErrorFlag: false,
    priceErrorFlag: false,
  });

  const calcTotalCost = () => {
    // creates a list containing all the item prices, then adds them together
    const prices = list.map((item) => item.price);
    return prices.reduce((a, b) => a + b, 0);
  };

  const addItem = (itemName, itemPrice) => {
    // adds the new item to the end of the list
    const newItem = { name: itemName, price: itemPrice };
    setList([...list, newItem]);
  };

  const removeItem = (indexToRemove) => {
    // removes the item at the specified index
    const newList = list.filter((_item, index) => {
      return index !== indexToRemove;
    });
    setList(newList);
  };

  const handleClear = () => {
    // clears the entire list
    setList([]);
  };
  const handleName = (e) => {
    // sets the current item name, and determines if it is a valid input
    setCurItem({
      ...curItem,
      name: e.target.value,
      nameIsValid: e.target.value.length > 0,
    });
  };
  const handlePrice = (e) => {
    // sets the current item price, and determines if it is a valid input

    setCurItem({
      ...curItem,
      price: parseFloat(e.target.value),
      priceIsValid: parseFloat(e.target.value) > 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the item is OK to add
    if (curItem.priceIsValid && curItem.nameIsValid) {
      //item is valid, add it!
      addItem(curItem.name, curItem.price);
      calcTotalCost();
      document.querySelector("#nameInput").focus();

      // clear the form fields to make it easier to enter the next item
      setCurItem({
        name: "",
        nameIsValid: false,
        nameErrorFlag: false,
        price: "",
        priceIsValid: false,
        priceErrorFlag: false,
      });
    } else {
      //item is not valid - show error(s)
      setCurItem({
        ...curItem,
        priceErrorFlag: !curItem.priceIsValid,
        nameErrorFlag: !curItem.nameIsValid,
      });
    }
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form
          onSubmit={handleSubmit}
          className="row g-3"
        >
          <div className="col">
            <input
              id="nameInput"
              onChange={handleName}
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={curItem.name}
            />
            {curItem.nameErrorFlag ? (
              <div className="alert alert-danger">
                Please enter an item name
              </div>
            ) : null}
          </div>
          <div className="col">
            <input
              onChange={handlePrice}
              className="form-control"
              value={curItem.price}
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
            />
            {curItem.priceErrorFlag ? (
              <div className="alert alert-danger">
                Please enter a valid price
              </div>
            ) : null}
          </div>
          <div className="col-md-auto">
            <button
              type="submit"
              className={`btn ${
                curItem.priceIsValid && curItem.nameIsValid
                  ? "btn-success"
                  : "btn-secondary"
              }`}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeItem(index);
                      }}
                      aria-label="Delete"
                      title="Delete"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${calcTotalCost().toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            onClick={handleClear}
            type="button"
            className="btn btn-outline-success"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
