import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const Steam = () => {
  const steam = [
    { price: 20, name: "Belt", category: "Men", category_id: 1 },
    {
      price: 139,
      name: "Blazer / Coat - Long",
      category: "Men",
      category_id: 1,
    },
    {
      price: 87,
      name: "Blazer / Coat - Short",
      category: "Men",
      category_id: 1,
    },
    { price: 209, name: "Boots leather", category: "Men", category_id: 1 },
    {
      price: 34,
      name: "Cap ( Casual / Woolen )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 52,
      name: "Combo - Shirt and Pant",
      category: "Men",
      category_id: 1,
    },
    { price: 58, name: "Dhoti Heavy", category: "Men", category_id: 1 },
    { price: 37, name: "Dhoti Normal", category: "Men", category_id: 1 },
    {
      price: 41,
      name: "Dhoti / Lungi ( Silk )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 20,
      name: "Formal and Casual Trousers / Pants",
      category: "Men",
      category_id: 1,
    },
    { price: 22, name: "Gloves ( Leather )", category: "Men", category_id: 1 },
    { price: 22, name: "Gloves ( Woolen )", category: "Men", category_id: 1 },
    { price: 8, name: "Handkerchief", category: "Men", category_id: 1 },
    { price: 43, name: "Hats", category: "Men", category_id: 1 },
    { price: 242, name: "Indo Western", category: "Men", category_id: 1 },
    {
      price: 313,
      name: "Jacket -  Faux fur Long",
      category: "Men",
      category_id: 1,
    },
    {
      price: 278,
      name: "Jacket -  Faux fur Short",
      category: "Men",
      category_id: 1,
    },
    { price: 278, name: "Jacket Leather", category: "Men", category_id: 1 },
    { price: 87, name: "Jacket Normal Long", category: "Men", category_id: 1 },
    { price: 69, name: "Jacket Normal Short", category: "Men", category_id: 1 },
    { price: 139, name: "Jacket Puffer Long", category: "Men", category_id: 1 },
    {
      price: 104,
      name: "Jacket Puffer Short",
      category: "Men",
      category_id: 1,
    },
    { price: 104, name: "Jacket Rexine", category: "Men", category_id: 1 },
    { price: 48, name: "Jeans", category: "Men", category_id: 1 },
    { price: 62, name: "Joggers", category: "Men", category_id: 1 },
    { price: 55, name: "Kurta ( Cotton )", category: "Men", category_id: 1 },
    { price: 69, name: "Kurta ( Silk )", category: "Men", category_id: 1 },
    { price: 80, name: "Kurta Heavy", category: "Men", category_id: 1 },
    {
      price: 121,
      name: "Kurta Payjama ( Heavy )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 69,
      name: "Kurta Payjama ( Light )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 76,
      name: "Muffler ( Woolen / Pashmina )",
      category: "Men",
      category_id: 1,
    },
    { price: 54, name: "Pagdi", category: "Men", category_id: 1 },
    {
      price: 104,
      name: "Parka Coat < Fur Inside > Long",
      category: "Men",
      category_id: 1,
    },
    {
      price: 87,
      name: "Parka Coat < Fur Inside > Short",
      category: "Men",
      category_id: 1,
    },
    { price: 10, name: "Pocket Square", category: "Men", category_id: 1 },
    { price: 34, name: "Pyjama", category: "Men", category_id: 1 },
    {
      price: 87,
      name: "Safari Shirt & Pant ",
      category: "Men",
      category_id: 1,
    },
    { price: 244, name: "Shawl - Pashmina", category: "Men", category_id: 1 },
    { price: 348, name: "Shawl  - Toosh", category: "Men", category_id: 1 },
    { price: 69, name: "Shawl / Lohi", category: "Men", category_id: 1 },
    { price: 104, name: "Shawl / Naga", category: "Men", category_id: 1 },
    { price: 139, name: "Sherwani", category: "Men", category_id: 1 },
    { price: 27, name: "Shirt", category: "Men", category_id: 1 },
    {
      price: 41,
      name: "Shirt & Dhoti ( Silk )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 191,
      name: "Shoes Leather / Suede / Nubuck",
      category: "Men",
      category_id: 1,
    },
    { price: 156, name: "Shoes Sports", category: "Men", category_id: 1 },
    { price: 24, name: "Shorts", category: "Men", category_id: 1 },
    { price: 17, name: "Socks Pair", category: "Men", category_id: 1 },
    { price: 125, name: "Suit 2 Pc", category: "Men", category_id: 1 },
    { price: 156, name: "Suit 3 Pc", category: "Men", category_id: 1 },
    {
      price: 69,
      name: "Sweater / Cardigan - Full Sleeve",
      category: "Men",
      category_id: 1,
    },
    {
      price: 59,
      name: "Sweater / Cardigan - Sleeveless",
      category: "Men",
      category_id: 1,
    },
    { price: 69, name: "Sweatshirt / Jumper", category: "Men", category_id: 1 },
    { price: 17, name: "Swimming Trunks", category: "Men", category_id: 1 },
    { price: 34, name: "Thermal", category: "Men", category_id: 1 },
    { price: 24, name: "Tie", category: "Men", category_id: 1 },
    { price: 33, name: "Track Pant", category: "Men", category_id: 1 },
    { price: 62, name: "Track Suit", category: "Men", category_id: 1 },
    { price: 20, name: "Trousers", category: "Men", category_id: 1 },
    { price: 38, name: "T - Shirt", category: "Men", category_id: 1 },
    { price: 52, name: "Turban", category: "Men", category_id: 1 },
    { price: 10, name: "Vest", category: "Men", category_id: 1 },
    { price: 52, name: "Waist Coat", category: "Men", category_id: 1 },
    { price: 17, name: "Wallet", category: "Men", category_id: 1 },
    {
      price: 278,
      name: "Wedding Sherwani set Designer",
      category: "Men",
      category_id: 1,
    },
    {
      price: 209,
      name: "Wedding Sherwani set",
      category: "Men",
      category_id: 1,
    },
    {
      price: 313,
      name: "Wedding Suit ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 418,
      name: "Wedding Suit Designer ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 278,
      name: "Wedding Tuxedo ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 348,
      name: "Wedding Tuxedo Designer ( 3 pcs )",
      category: "Men",
      category_id: 1,
    },
    {
      price: 37,
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
    <div className="Steam">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {steam.map((value) => (
            <tr key={value.category_id}>
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

export default Steam;
