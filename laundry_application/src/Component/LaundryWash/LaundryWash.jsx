import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const LaundryWash = () => {
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Item added In Your Cart");
  };
  return (
    <div className="LaundryWash">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laundry Wash & Fold</td>
            <td>
              <i class="bi bi-currency-rupee"></i>190
            </td>
            <td>
              <button onClick={() => send(value)}>
                <i className="bi bi-plus"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LaundryWash;
