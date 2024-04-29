import React from "react";
import "./MensComponent.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const MensComponent = () => {
  const MensData = [
    { price: 49, name: "Belt", category: "Men", category_id: 1 },
    {
      price: 339,
      name: "Blazer / Coat - Long",
      category: "Men",
      category_id: 1,
    },
    {
      price: 209,
      name: "Blazer / Coat - Short",
      category: "Men",
      category_id: 1,
    },
    { price: 509, name: "Boots leather", category: "Men", category_id: 1 },
    {
      price: 79,
      name: "Cap ( Casual / Woolen )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 129,
      name: "Combo - Shirt and Pant",
      category: "Men",
      category_id: 1,
    },
    { price: 139, name: "Dhoti Heavy", category: "Men", category_id: 1 },
    { price: 89, name: "Dhoti Normal", category: "Men", category_id: 1 },
    {
      price: 99,
      name: "Dhoti / Lungi ( Silk )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 89,
      name: "Formal and Casual Trousers / Pants",
      category: "Men",
      category_id: 1,
    },
    { price: 299, name: "Gloves ( Leather )", category: "Men", category_id: 1 },
    { price: 59, name: "Gloves ( Woolen )", category: "Men", category_id: 1 },
    { price: 19, name: "Handkerchief", category: "Men", category_id: 1 },
    { price: 99, name: "Hats", category: "Men", category_id: 1 },
    { price: 589, name: "Indo Western", category: "Men", category_id: 1 },
    {
      price: 749,
      name: "Jacket -  Faux fur Long",
      category: "Men",
      category_id: 1,
    },
    {
      price: 649,
      name: "Jacket -  Faux fur Short",
      category: "Men",
      category_id: 1,
    },
    { price: 649, name: "Jacket Leather", category: "Men", category_id: 1 },
    { price: 199, name: "Jacket Normal Long", category: "Men", category_id: 1 },
    {
      price: 169,
      name: "Jacket Normal Short",
      category: "Men",
      category_id: 1,
    },
    { price: 339, name: "Jacket Puffer Long", category: "Men", category_id: 1 },
    {
      price: 249,
      name: "Jacket Puffer Short",
      category: "Men",
      category_id: 1,
    },
    { price: 249, name: "Jacket Rexine", category: "Men", category_id: 1 },
    { price: 119, name: "Jeans", category: "Men", category_id: 1 },
    { price: 149, name: "Joggers", category: "Men", category_id: 1 },
    { price: 129, name: "Kurta ( Cotton )", category: "Men", category_id: 1 },
    { price: 169, name: "Kurta ( Silk )", category: "Men", category_id: 1 },
    { price: 199, name: "Kurta Heavy", category: "Men", category_id: 1 },
    {
      price: 279,
      name: "Kurta Payjama ( Heavy )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 159,
      name: "Kurta Payjama ( Light )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 189,
      name: "Muffler ( Woolen / Pashmina )",
      category: "Men",
      category_id: 1,
    },
    { price: 132, name: "Pagdi", category: "Men", category_id: 1 },
    {
      price: 249,
      name: "Parka Coat < Fur Inside > Long",
      category: "Men",
      category_id: 1,
    },
    {
      price: 199,
      name: "Parka Coat < Fur Inside > Short",
      category: "Men",
      category_id: 1,
    },
    { price: 25, name: "Pocket Square", category: "Men", category_id: 1 },
    { price: 79, name: "Pyjama", category: "Men", category_id: 1 },
    {
      price: 199,
      name: "Safari Shirt & Pant ",
      category: "Men",
      category_id: 1,
    },
    { price: 599, name: "Shawl - Pashmina", category: "Men", category_id: 1 },
    { price: 849, name: "Shawl  - Toosh", category: "Men", category_id: 1 },
    { price: 159, name: "Shawl / Lohi", category: "Men", category_id: 1 },
    { price: 249, name: "Shawl / Naga", category: "Men", category_id: 1 },
    { price: 339, name: "Sherwani", category: "Men", category_id: 1 },
    { price: 89, name: "Shirt", category: "Men", category_id: 1 },
    {
      price: 139,
      name: "Shirt & Dhoti ( Silk )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 449,
      name: "Shoes Leather / Suede / Nubuck",
      category: "Men",
      category_id: 1,
    },
    { price: 299, name: "Shoes Sports", category: "Men", category_id: 1 },
    { price: 59, name: "Shorts", category: "Men", category_id: 1 },
    { price: 39, name: "Socks Pair", category: "Men", category_id: 1 },
    { price: 299, name: "Suit 2 Pc", category: "Men", category_id: 1 },
    { price: 379, name: "Suit 3 Pc", category: "Men", category_id: 1 },
    {
      price: 159,
      name: "Sweater / Cardigan - Full Sleeve",
      category: "Men",
      category_id: 1,
    },
    {
      price: 139,
      name: "Sweater / Cardigan - Sleeveless",
      category: "Men",
      category_id: 1,
    },
    {
      price: 169,
      name: "Sweatshirt / Jumper",
      category: "Men",
      category_id: 1,
    },
    { price: 39, name: "Swimming Trunks", category: "Men", category_id: 1 },
    { price: 79, name: "Thermal", category: "Men", category_id: 1 },
    { price: 59, name: "Tie", category: "Men", category_id: 1 },
    { price: 79, name: "Track Pant", category: "Men", category_id: 1 },
    { price: 149, name: "Track Suit", category: "Men", category_id: 1 },
    { price: 109, name: "Trousers", category: "Men", category_id: 1 },
    { price: 89, name: "T - Shirt", category: "Men", category_id: 1 },
    { price: 129, name: "Turban", category: "Men", category_id: 1 },
    { price: 109, name: "Vest", category: "Men", category_id: 1 },
    { price: 119, name: "Waist Coat", category: "Men", category_id: 1 },
    { price: 209, name: "Wallet", category: "Men", category_id: 1 },
    {
      price: 679,
      name: "Wedding Sherwani set Designer",
      category: "Men",
      category_id: 1,
    },
    {
      price: 509,
      name: "Wedding Sherwani set",
      category: "Men",
      category_id: 1,
    },
    {
      price: 769,
      name: "Wedding Suit ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 1099,
      name: "Wedding Suit Designer ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 679,
      name: "Wedding Tuxedo ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 849,
      name: "Wedding Tuxedo Designer ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 89,
      name: "Wind Cheater / Rain Jacket",
      category: "Men",
      category_id: 1,
    },
  ];
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Item added In Your Cart");
  };
  return (
    <div className="MensComponent">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price per pic</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {MensData.map((value) => (
            <tr key={value.name}>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>
                <button onClick={() => send(value)}>
                  <i className="bi bi-plus"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MensComponent;
