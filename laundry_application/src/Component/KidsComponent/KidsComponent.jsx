import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const KidsComponent = () => {
  const kidsMaterail = [
    { price: 29, name: "Blouse", category: "Kids", category_id: 4 },
    { price: 59, name: "Blouse / Top", category: "Kids", category_id: 4 },
    {
      price: 319,
      name: "Choli + Lehanga + Dupatta",
      category: "Kids",
      category_id: 4,
    },
    { price: 139, name: "Coat", category: "Kids", category_id: 4 },
    {
      price: 69,
      name: "Combo -  Shirt and Pant ( 2 pcs set )",
      category: "Kids",
      category_id: 4,
    },
    { price: 129, name: "Cotton Frock", category: "Kids", category_id: 4 },
    { price: 249, name: "Designer Frock", category: "Kids", category_id: 4 },
    { price: 99, name: "Dress", category: "Kids", category_id: 4 },
    { price: 199, name: "Dress ( Heavy )", category: "Kids", category_id: 4 },
    {
      price: 129,
      name: "Dungaree ( Short / Long )",
      category: "Kids",
      category_id: 4,
    },
    {
      price: 169,
      name: "Ethnic Kurta set - 2pcs",
      category: "Kids",
      category_id: 4,
    },
    {
      price: 249,
      name: "Ethnic wear ( Normal / Heavy work )",
      category: "Kids",
      category_id: 4,
    },
    { price: 99, name: "Frock", category: "Kids", category_id: 4 },
    { price: 119, name: "Jacket", category: "Kids", category_id: 4 },
    { price: 55, name: "Jeans", category: "Kids", category_id: 4 },
    {
      price: 239,
      name: "Kurta + Pants / Salwar / Churidar + Dupatta",
      category: "Kids",
      category_id: 4,
    },
    { price: 39, name: "Pyjama", category: "Kids", category_id: 4 },
    { price: 49, name: "Shirt", category: "Kids", category_id: 4 },
    { price: 39, name: "Shorts", category: "Kids", category_id: 4 },
    { price: 69, name: "Skirt", category: "Kids", category_id: 4 },
    { price: 189, name: "Suit 2 Pc", category: "Kids", category_id: 4 },
    { price: 239, name: "Suit 3 Pc", category: "Kids", category_id: 4 },
    {
      price: 99,
      name: "Sweater ( Full Sleeves )",
      category: "Kids",
      category_id: 4,
    },
    {
      price: 89,
      name: "Sweater ( Sleeveless )",
      category: "Kids",
      category_id: 4,
    },
    {
      price: 29,
      name: "Tights and Leggings",
      category: "Kids",
      category_id: 4,
    },
    {
      price: 139,
      name: "Track suit / Night suit ( 2 pcs set )",
      category: "Kids",
      category_id: 4,
    },
    { price: 49, name: "T - Shirt", category: "Kids", category_id: 4 },
    { price: 26, name: "Undergarment", category: "Kids", category_id: 4 },
    { price: 59, name: "Waist Coat", category: "Kids", category_id: 4 },
  ];
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Item added In Your Cart");
  };
  return (
    <div className="KidsComponent">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price per pic</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {kidsMaterail.map((value) => (
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

export default KidsComponent;
