import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const HouseholdComponent = () => {
  const houseHold = [
    { price: 449, name: "Bag", category: "Household", category_id: 3 },
    {
      price: 429,
      name: "Bagpack Large",
      category: "Household",
      category_id: 3,
    },
    {
      price: 299,
      name: "Bagpack Medium",
      category: "Household",
      category_id: 3,
    },
    {
      price: 249,
      name: "Bagpack Small",
      category: "Household",
      category_id: 3,
    },
    {
      price: 79,
      name: "Bath Mat (  Large  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 39,
      name: "Bath Mat (  Small  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 59,
      name: "Bath Robe (  Medium  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 69,
      name: "Bath Robe ( Big )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 49,
      name: "Bath Robe ( Small )",
      category: "Household",
      category_id: 3,
    },
    { price: 49, name: "Bath Towel", category: "Household", category_id: 3 },
    {
      price: 279,
      name: "Bed Cover Double",
      category: "Household",
      category_id: 3,
    },
    {
      price: 199,
      name: "Bed Cover Single",
      category: "Household",
      category_id: 3,
    },
    {
      price: 159,
      name: "Bed Sheet Double",
      category: "Household",
      category_id: 3,
    },
    {
      price: 99,
      name: "Bed Sheet Single",
      category: "Household",
      category_id: 3,
    },
    {
      price: 359,
      name: "Blanket Double",
      category: "Household",
      category_id: 3,
    },
    {
      price: 749,
      name: "Blanket Duvet (  Double  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 599,
      name: "Blanket Duvet (  Single  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 279,
      name: "Blanket Single",
      category: "Household",
      category_id: 3,
    },
    {
      price: 199,
      name: "Curtain - Cotton [Per Panel]",
      category: "Household",
      category_id: 3,
    },
    {
      price: 229,
      name: "Curtain - Embroidery Work [Per Panel]",
      category: "Household",
      category_id: 3,
    },
    {
      price: 249,
      name: "Curtain -  Lace [Per Panel]",
      category: "Household",
      category_id: 3,
    },
    {
      price: 279,
      name: "Curtain - With Lining [Per Panel]",
      category: "Household",
      category_id: 3,
    },
    {
      price: 189,
      name: "Curtain - Without Lining [ Per Panel ]",
      category: "Household",
      category_id: 3,
    },
    {
      price: 99,
      name: "Cushion Cover Embroidery (  Small / Medium / Large size  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 99,
      name: "Cushion Cover Normal (  Large  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 79,
      name: "Cushion Cover Normal (  Medium  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 59,
      name: "Cushion Cover Normal (  Small  )",
      category: "Household",
      category_id: 3,
    },
    { price: 29, name: "Face Towel", category: "Household", category_id: 3 },
    {
      price: 49,
      name: "Foot Mat ( 1ft * 2ft )",
      category: "Household",
      category_id: 3,
    },
    { price: 49, name: "Gamosa", category: "Household", category_id: 3 },
    { price: 39, name: "Hand Towel", category: "Household", category_id: 3 },
    { price: 79, name: "Handgloves", category: "Household", category_id: 3 },
    { price: 339, name: "Laptop Bag", category: "Household", category_id: 3 },
    {
      price: 699,
      name: "Leather Bag ( Large )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 509,
      name: "Leather Bag ( Medium )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 379,
      name: "Leather Bag ( Small )",
      category: "Household",
      category_id: 3,
    },
    { price: 249, name: "Mosquito Net", category: "Household", category_id: 3 },
    {
      price: 109,
      name: "Oven Gloves ( Set )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 39,
      name: "Pillow Cover - Cotton / Terry Cotton",
      category: "Household",
      category_id: 3,
    },
    {
      price: 79,
      name: "Pillow Cover - Embroidery",
      category: "Household",
      category_id: 3,
    },
    {
      price: 55,
      name: "Pillow Cover 2 pcs Set",
      category: "Household",
      category_id: 3,
    },
    { price: 319, name: "Pram", category: "Household", category_id: 3 },
    {
      price: 439,
      name: "Quilt ( Double )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 359,
      name: "Quilt ( Single )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 279,
      name: "Quilt Cover (  Double  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 199,
      name: "Quilt Cover (  Single  )",
      category: "Household",
      category_id: 3,
    },
    { price: 399, name: "Razai", category: "Household", category_id: 3 },
    {
      price: 399,
      name: "Sofa cover - Embroidery work (  Single  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 339,
      name: "Sofa cover - Lace (  Single  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 99,
      name: "Sofa cover -   Normal (  Single  )",
      category: "Household",
      category_id: 3,
    },
    {
      price: 249,
      name: "Stuff Toy Big",
      category: "Household",
      category_id: 3,
    },
    {
      price: 159,
      name: "Stuff Toy Medium",
      category: "Household",
      category_id: 3,
    },
    {
      price: 99,
      name: "Stuff Toy Small",
      category: "Household",
      category_id: 3,
    },
    {
      price: 399,
      name: "Suit Case Big",
      category: "Household",
      category_id: 3,
    },
    {
      price: 319,
      name: "Suit Case Medium",
      category: "Household",
      category_id: 3,
    },
    {
      price: 199,
      name: "Suit Case Small",
      category: "Household",
      category_id: 3,
    },
    {
      price: 119,
      name: "Table Cloth Big",
      category: "Household",
      category_id: 3,
    },
    {
      price: 69,
      name: "Table Cloth Small",
      category: "Household",
      category_id: 3,
    },
    {
      price: 139,
      name: "Table Runner - Fancy",
      category: "Household",
      category_id: 3,
    },
    {
      price: 199,
      name: "Table Runner Embroidery",
      category: "Household",
      category_id: 3,
    },
    {
      price: 299,
      name: "Travel pillow with beads",
      category: "Household",
      category_id: 3,
    },
    {
      price: 249,
      name: "Travel pillow without beads",
      category: "Household",
      category_id: 3,
    },
  ];
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Item added In Your Cart");
  };
  return (
    <div className="HouseholdComponent">
      <table>
        <thead>
          <tr>
            <th>Item List</th>
            <th>Price per pic</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {houseHold.map((value) => (
            <tr>
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

export default HouseholdComponent;
