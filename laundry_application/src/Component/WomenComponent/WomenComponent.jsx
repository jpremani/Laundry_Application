import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const WomenComponent = () => {
  const Womendata = [
    { price: 49, name: "Belt", category: "Women", category_id: 2 },
    { price: 79, name: "Blouse", category: "Women", category_id: 2 },
    { price: 129, name: "Blouse Designer", category: "Women", category_id: 2 },
    { price: 99, name: "Blouse Heavy Work", category: "Women", category_id: 2 },
    { price: 79, name: "Blouse Normal", category: "Women", category_id: 2 },
    { price: 339, name: "Boot", category: "Women", category_id: 2 },
    {
      price: 89,
      name: "Cap ( Casual / Woolen )",
      category: "Women",
      category_id: 2,
    },
    { price: 109, name: "Caps Woolen", category: "Women", category_id: 2 },
    { price: 169, name: "Chadar", category: "Women", category_id: 2 },
    {
      price: 199,
      name: "Chadar Muga and Pator",
      category: "Women",
      category_id: 2,
    },
    { price: 249, name: "Choli ", category: "Women", category_id: 2 },
    {
      price: 599,
      name: "Choli + Lehanga + Dupatta",
      category: "Women",
      category_id: 2,
    },
    { price: 199, name: "Coat - Long", category: "Women", category_id: 2 },
    { price: 149, name: "Coat - Short ", category: "Women", category_id: 2 },
    {
      price: 1249,
      name: "Designer Choli + Lehanga + Duppatta",
      category: "Women",
      category_id: 2,
    },
    { price: 249, name: "Designer Kurta", category: "Women", category_id: 2 },
    {
      price: 339,
      name: "Designer Lehanga / ghagra",
      category: "Women",
      category_id: 2,
    },
    { price: 299, name: "Dhara", category: "Women", category_id: 2 },
    { price: 129, name: "Dress", category: "Women", category_id: 2 },
    { price: 179, name: "Dress ( Cotton )", category: "Women", category_id: 2 },
    { price: 349, name: "Dress ( Heavy )", category: "Women", category_id: 2 },
    {
      price: 599,
      name: "Dress Indo western",
      category: "Women",
      category_id: 2,
    },
    {
      price: 159,
      name: "Dress / Frock / Jumpsuit Long",
      category: "Women",
      category_id: 2,
    },
    {
      price: 129,
      name: "Dress / Frock / Jumpsuit Short",
      category: "Women",
      category_id: 2,
    },
    { price: 199, name: "Dungaree Long", category: "Women", category_id: 2 },
    { price: 139, name: "Dungaree Short", category: "Women", category_id: 2 },
    { price: 79, name: "Dupatta", category: "Women", category_id: 2 },
    {
      price: 129,
      name: "Dupatta Heavy Work",
      category: "Women",
      category_id: 2,
    },
    {
      price: 139,
      name: "Formal And Semi Formal Trouser",
      category: "Women",
      category_id: 2,
    },
    {
      price: 299,
      name: "Formal Gown Long Heavy work",
      category: "Women",
      category_id: 2,
    },
    {
      price: 199,
      name: "Formal Gown Long Normal",
      category: "Women",
      category_id: 2,
    },
    {
      price: 249,
      name: "Formal Gown Short Heavy Work",
      category: "Women",
      category_id: 2,
    },
    {
      price: 149,
      name: "Formal Gown Short Normal",
      category: "Women",
      category_id: 2,
    },
    {
      price: 229,
      name: "Garo Dakmanda Heavy",
      category: "Women",
      category_id: 2,
    },
    {
      price: 149,
      name: "Garo Dakmanda Normal",
      category: "Women",
      category_id: 2,
    },
    { price: 599, name: "Ghagra 3pc( n )", category: "Women", category_id: 2 },
    {
      price: 759,
      name: "Ghagra Heavy 3pcs( d )",
      category: "Women",
      category_id: 2,
    },
    { price: 299, name: "Gloves Leather", category: "Women", category_id: 2 },
    { price: 59, name: "Gloves Woolen", category: "Women", category_id: 2 },
    { price: 19, name: "Handkerchief", category: "Women", category_id: 2 },
    { price: 79, name: "Hats", category: "Women", category_id: 2 },
    {
      price: 39,
      name: "Innerwear / Undergarments",
      category: "Women",
      category_id: 2,
    },
    {
      price: 339,
      name: "Jacket -  Faux fur Long",
      category: "Women",
      category_id: 2,
    },
    {
      price: 249,
      name: "Jacket -  Faux fur Short",
      category: "Women",
      category_id: 2,
    },
    { price: 679, name: "Jacket Leather", category: "Women", category_id: 2 },
    {
      price: 249,
      name: "Jacket Normal Long",
      category: "Women",
      category_id: 2,
    },
    {
      price: 169,
      name: "Jacket Normal Short",
      category: "Women",
      category_id: 2,
    },
    {
      price: 339,
      name: "Jacket Puffer Long",
      category: "Women",
      category_id: 2,
    },
    {
      price: 249,
      name: "Jacket Puffer Short",
      category: "Women",
      category_id: 2,
    },
    { price: 199, name: "Jacket Rexine", category: "Women", category_id: 2 },
    { price: 149, name: "Jainkyrshah", category: "Women", category_id: 2 },
    { price: 299, name: "Jainsem", category: "Women", category_id: 2 },
    { price: 129, name: "Jeans", category: "Women", category_id: 2 },
    { price: 109, name: "Jeggings", category: "Women", category_id: 2 },
    {
      price: 119,
      name: "Kameez / Kurti Cotton",
      category: "Women",
      category_id: 2,
    },
    { price: 89, name: "Kameez / Kurta", category: "Women", category_id: 2 },
    {
      price: 89,
      name: "Kesa Pator Chaddar",
      category: "Women",
      category_id: 2,
    },
    {
      price: 249,
      name: "Kesa Pator Mekhela",
      category: "Women",
      category_id: 2,
    },
    {
      price: 339,
      name: "Kesa Pator Mekhela Chaddar 3pcs",
      category: "Women",
      category_id: 2,
    },
    {
      price: 299,
      name: "Khasi Dhara Munga",
      category: "Women",
      category_id: 2,
    },
    {
      price: 249,
      name: "Khasi Jainsem Heavy",
      category: "Women",
      category_id: 2,
    },
    {
      price: 199,
      name: "Khasi Jainsem Light",
      category: "Women",
      category_id: 2,
    },
    {
      price: 159,
      name: "Kurta + Pants / Salwar / Churidar",
      category: "Women",
      category_id: 2,
    },
    {
      price: 229,
      name: "Kurta + Pants / Salwar / Churidar + Dupatta",
      category: "Women",
      category_id: 2,
    },
    { price: 249, name: "Ladies Suit 2pcs", category: "Women", category_id: 2 },
    { price: 339, name: "Ladies Suit 3pcs", category: 2 },
  ];
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Item added In Your Cart");
  };

  return (
    <div className="WomenComponent">
      <table>
        <thead>
          <tr>
            <th>Item List</th>
            <th>Price per pic</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Womendata.map((value) => (
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

export default WomenComponent;
