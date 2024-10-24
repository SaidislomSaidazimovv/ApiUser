import React from "react";
import "./Cart.scss";
import Empty from "../../components/empty/Empty";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
  removeAllItemFromCart,
} from "../../context/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  let cartItems = cart.map((item) => (
    <div className="CCart" key={item.id}>
      <img className="img" src={item.images[0]} alt="" />
      <h3 className="name">{item.title}</h3>
      <p className="price">{item.price} USD</p>
      <b className="total">{item.price * item.quantity}</b>
      <br />
      <div className="btn-block">
        <button
          className="btn-minus"
          disabled={item.quantity === 1}
          onClick={() => dispatch(decrementCartQuantity(item))}
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button
          className="btn-plus"
          onClick={() => dispatch(incrementCartQuantity(item))}
        >
          +
        </button>
      </div>
      <button
        className="btn-remove"
        onClick={() => dispatch(removeItemFromCart(item))}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <div className="pb">
      {cart && cart.length > 0 ? (
        <div>
          <div className="container">{cartItems}</div>
          <button
            onClick={() => dispatch(removeAllItemFromCart())}
            className="btn-clear"
          >
            Clear
          </button>
        </div>
      ) : (
        <Empty text="Cart" />
      )}
    </div>
  );
};

export default Cart;
