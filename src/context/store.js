import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
});
