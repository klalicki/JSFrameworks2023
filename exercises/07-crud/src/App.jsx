import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [list, setList] = useState([]);
  const [curItem, setCurItem] = useState({
    name: "",
    nameIsValid: false,
    price: "",
    priceIsValid: false,
  });

  const calcTotalCost = () => {
    const prices = list.map((item) => item.price);
    return prices.reduce((a, b) => a + b, 0);
  };

  const addItem = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice };
    setList([...list, newItem]);
  };

  const removeItem = (indexToRemove) => {
    const newList = list.filter((_item, index) => {
      return index !== indexToRemove;
    });
    setList(newList);
  };

  const handleClear = () => {
    setList([]);
  };
  const handleName = (e) => {
    setCurItem({
      ...curItem,
      name: e.target.value,
      nameIsValid: e.target.value.length > 0,
    });
    console.log(e.target.value.length);
  };
  const handlePrice = (e) => {
    setCurItem({
      ...curItem,
      price: parseFloat(e.target.value),
      priceIsValid: parseFloat(e.target.value) > 0,
    });
    console.log(e.target.value.length);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (curItem.priceIsValid && curItem.nameIsValid) {
      addItem(curItem.name, curItem.price);
      calcTotalCost();
      document.querySelector("#nameInput").focus();
    }

    // clear the form fields to make it easier to enter the next item
    setCurItem({
      name: "",
      nameIsValid: false,
      price: "",
      priceIsValid: false,
    });
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
            {curItem.nameIsValid ? null : (
              <div className="alert alert-warning">
                Please enter an item name
              </div>
            )}
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
            {curItem.priceIsValid ? null : (
              <div className="alert alert-warning">
                Please enter a valid price
              </div>
            )}
          </div>
          <div className="col-md-auto">
            <button
              type="submit"
              className="btn btn-success"
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
                <tr>
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
