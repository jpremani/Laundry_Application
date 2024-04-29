import React from "react";
import "./PremiumLaundry.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const PremiumLaundry = () => {
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Item added In Your Cart");
  };
  return (
    <div className="PremiumLaundry">
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
            <td>Premium Laundry Kg</td>
            <td>
              <i class="bi bi-currency-rupee"></i> 139
            </td>
            <td onClick={() => send(value)}>
              <button>
                <i className="bi bi-plus"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PremiumLaundry;
