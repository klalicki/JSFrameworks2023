import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [list, setList] = useState([{ name: "item1", price: 1 }]);
  const [curItem, setCurItem] = useState({
    name: "",
    price: "",
  });

  const addItem = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice };
    setList([...list, newItem]);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form
          method="POST"
          className="row g-3"
        >
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={curItem.name}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              value={curItem.price}
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
            />
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
                  <td>{item.price}</td>
                  <td>
                    <button
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
          <strong>Total Cost: {/* Complete me */}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
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
