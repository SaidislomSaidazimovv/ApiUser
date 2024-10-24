import React from "react";
import "./Products.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";

const Products = ({ data, title }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  let cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  if (!data) {
    return <div>No data</div>;
  }

  let productItems = data?.map((el) => (
    <div key={el.id} className="card">
      <img className="img" src={el.images[0]} alt="" />
      <h3 className="name">{el.title}</h3>
      <p className="price">{el.price}</p>
      <button className="like-btn" onClick={() => dispatch(toggleLike(el))}>
        {wishlist?.some((item) => item.id === el.id) ? (
          <FaHeart style={{ color: "red" }} className="like" />
        ) : (
          <FaRegHeart className="like" />
        )}
      </button>
      <button className="cart-btn" onClick={() => dispatch(addToCart(el))}>
        {cart?.some((item) => item.id === el.id) ? (
          <IoCartSharp style={{ color: "blue" }} className="cart" />
        ) : (
          <IoCartOutline className="cart" />
        )}
      </button>
    </div>
  ));

  return (
    <div>
      <h2>{title}</h2>
      <div className="wrapper">{productItems}</div>
    </div>
  );
};

export default Products;
