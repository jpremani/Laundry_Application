import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";
const LuxeryComponent = () => {
  const Luxery = [
    { price: 169, name: "Blouse", category: "Women Luxury", category_id: 6 },
    {
      price: 249,
      name: "Blouse / Top",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 679,
      name: "Choli + Lehanga",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 849,
      name: "Choli + Lehanga + Dupatta",
      category: "Women Luxury",
      category_id: 6,
    },
    { price: 549, name: "Coat", category: "Women Luxury", category_id: 6 },
    { price: 499, name: "Dress", category: "Women Luxury", category_id: 6 },
    { price: 159, name: "Dupatta", category: "Women Luxury", category_id: 6 },
    {
      price: 209,
      name: "Dupatta Designer",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 429,
      name: "Jacket - Short ( including leather )",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 299,
      name: "Kameez / Kurta",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 349,
      name: "Kurta + Pants / Salwar / Churidar",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 499,
      name: "Kurta + Pants / Salwar / Churidar + Dupatta",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 339,
      name: "Ladies Suit 2 Pc",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 429,
      name: "Ladies Suit 3 Pc",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 599,
      name: "Lehanga / Flared Skirt",
      category: "Women Luxury",
      category_id: 6,
    },
    { price: 449, name: "Overcoat", category: "Women Luxury", category_id: 6 },
    {
      price: 110,
      name: "Pyjama / Pants / Salwar / Churidar",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 509,
      name: "Saree ( Embroidered / Heavy )",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 764,
      name: "Shawl - Pashmina",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 849,
      name: "Shawl - Toosh",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 1019,
      name: "Sherwani / Achkan",
      category: "Women Luxury",
      category_id: 6,
    },
    { price: 159, name: "Shirt", category: "Women Luxury", category_id: 6 },
    {
      price: 399,
      name: "Sweater / Cardigan - Full Sleeve",
      category: "Women Luxury",
      category_id: 6,
    },
    {
      price: 349,
      name: "Sweater / Cardigan - Sleeveless",
      category: "Women Luxury",
      category_id: 6,
    },
    { price: 549, name: "Coat", category: "Men Luxury", category_id: 7 },
    {
      price: 429,
      name: "Coat - Short",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 749,
      name: "Jacket - Short ( including leather )",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 169,
      name: "Kameez / Kurta",
      category: "Men Luxury",
      category_id: 7,
    },
    { price: 399, name: "Overcoat", category: "Men Luxury", category_id: 7 },
    {
      price: 759,
      name: "Shawl - Pashmina",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 849,
      name: "Shawl - Toosh",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 339,
      name: "Sherwani / Achkan",
      category: "Men Luxury",
      category_id: 7,
    },
    { price: 119, name: "Shirt", category: "Men Luxury", category_id: 7 },
    { price: 759, name: "Suit 2 Pc", category: "Men Luxury", category_id: 7 },
    { price: 949, name: "Suit 3 Pc", category: "Men Luxury", category_id: 7 },
    {
      price: 209,
      name: "Sweater / Cardigan - Full Sleeve",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 169,
      name: "Sweater / Cardigan - Sleeveless",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 729,
      name: "Wedding Tuxedo Designer ( 3 pcs )",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 679,
      name: "Wedding Sherwani set",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 849,
      name: "Wedding Sherwani set Designer",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 759,
      name: "Wedding Suit ( 3 pcs )",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 1019,
      name: "Wedding Suit Designer ( 3 pcs )",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 679,
      name: "Wedding Tuxedo ( 3 pcs )",
      category: "Men Luxury",
      category_id: 7,
    },
    {
      price: 339,
      name: "Bed Cover Double / King",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 239,
      name: "Bed Cover Single",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 199,
      name: "Bed Sheet Double / King",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 119,
      name: "Bed Sheet Single",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 429,
      name: "Blanket Double",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 339,
      name: "Blanket Single",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 339,
      name: "Curtain - With Lining [ Per Panel ]",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 229,
      name: "Curtain - Without Lining [ Per Panel ]",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 119,
      name: "Cushion Cover Big",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 69,
      name: "Cushion Cover Small",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 339,
      name: "Quilt Cover ( Double )",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 237,
      name: "Quilt Cover ( Single )",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 509,
      name: "Quilt Double",
      category: "Household Luxury",
      category_id: 8,
    },
    {
      price: 424,
      name: "Quilt Single",
      category: "Household Luxury",
      category_id: 8,
    },
  ];
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Item added In Your Cart");
  };
  return (
    <div className="LuxeryComponent">
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Price per pic</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Luxery.map((value) => (
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

export default LuxeryComponent;
