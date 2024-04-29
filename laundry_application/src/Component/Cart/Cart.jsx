import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
  removeSingleIteams,
  emptycartIteam,
} from "../../redux/feature/cartSlice";
import "./Cart.css";
import { app } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { carts } = useSelector((state) => state.allCart);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Empty cart
  const emptycart = () => {
    dispatch(emptycartIteam());
  };
  //Remove To Cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
  };
  // remove single item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteams(e));
  };
  // add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };
  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);
  // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };
  // count total price
  const total = () => {
    let totalprice = 0;
    carts.map((ele, ind) => {
      totalprice = ele.price * ele.qnty + totalprice;
    });
    setPrice(totalprice);
  };
  const handleCheckout = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/checkout");
      } else {
        alert("please log in");
        navigate("/login");
      }
    });
  };
  useEffect(() => {
    total(), countquantity();
  }, [total, countquantity]);

  return (
    <div
      className="Cart_container row justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="Cart">
        <div className="Cart_header bg-dark p-3">
          <div className="card-header d-flex justify-content-between">
            <h5 className="text-white m-0">
              Total Products
              {carts.length > 0 ? `(${carts.length})` : ""}
            </h5>
            {carts.length > 0 ? (
              <button className="btn btn-danger mt-0 " onClick={emptycart}>
                <i className="bi bi-trash3 "></i>
                EmptyCart
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="card_body">
          {carts.length === 0 ? (
            <table className="table cart-table mb-0">
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <div className="cart-empty">
                      <i className="fa fa-shopping-cart"></i>
                      <p>Your Cart Is Empty</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="table cart-table mb-0 table-responsive-sm">
              <thead>
                <tr>
                  <th>Delete Item</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th className="text-right">
                    {" "}
                    <span id="amount" className="amount">
                      Total Amount
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts.map((data, index) => (
                  <tr>
                    <td>
                      <button
                        className="prdct-delete"
                        onClick={() => handleDecrement(data.name)}
                      >
                        <i class="bi bi-trash3"></i>
                      </button>
                    </td>
                    <td>
                      <div className="product-name">
                        <p>{data.name}</p>
                      </div>
                    </td>
                    <td>{data.price}</td>
                    <td>
                      <div className="prdct-qty-container">
                        <button
                          className="prdct-qty-btn"
                          type="button"
                          onClick={
                            data.qnty <= 1
                              ? () => handleDecrement(data.name)
                              : () => handleSingleDecrement(data)
                          }
                        >
                          <i class="bi bi-dash"></i>
                        </button>
                        <input
                          type="text"
                          className="qty-input-box"
                          style={{ width: "40px", textAlign: "center" }}
                          value={data.qnty}
                          disabled
                          name=""
                          id=""
                        />
                        <button
                          className="prdct-qty-btn"
                          type="button"
                          onClick={() => handleIncrement(data)}
                        >
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="text-right">₹ {data.qnty * data.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>&nbsp;</th>
                  <th colSpan={1}>&nbsp;</th>
                  <th>
                    Items In Cart <span className="ml-2 mr-2">:</span>
                    <span className="text-danger">{totalquantity}</span>
                  </th>
                  <th className="text-right">
                    Total Price<span className="ml-2 mr-2">:</span>
                    <span className="text-danger">₹ {totalprice}</span>
                  </th>
                  <button className="bg bg-danger" onClick={handleCheckout}>
                    CheckOut
                  </button>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
