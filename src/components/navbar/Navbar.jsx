import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const users = useSelector((state) => state.users.value);
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="navbar">
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{users.length}</sup>
      </NavLink>
      <NavLink className="nav" to={"/wishlist"}>
        <img
          className="like"
          src="https://img.icons8.com/ios/50/000000/like.png"
          alt=""
        />
        <sup className="like-sup">{wishlist.length}</sup>
      </NavLink>
      <NavLink to={"/cart"}>
        <img
          className="shopping-cart"
          src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          alt=""
        />
        <sup className="shopping-sup">{cart.length}</sup>
      </NavLink>
    </div>
  );
}

export default Navbar;
