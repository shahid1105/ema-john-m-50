import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Item: {cart.length}</p>
      <p>Total price: </p>
      <p>Total shipping: </p>
      <p>Tax: </p>
      <h6>Grand total: </h6>
    </div>
  );
};

export default Cart;
