import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import CreateUser from "./router/create-user/CreateUser";
import AllUsers from "./router/all-users/AllUsers";
import Wishlist from "./router/wishlist/Wishlist";
import Cart from "./router/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
