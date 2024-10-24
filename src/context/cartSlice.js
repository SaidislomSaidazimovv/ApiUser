import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },

  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(state.value));
      } else {
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },

    incrementCartQuantity(state, action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      state.value = state.value.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementCartQuantity(state, action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      state.value = state.value.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, quantity: el.quantity - 1 };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeItemFromCart(state, action) {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeAllItemFromCart(state) {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
  removeAllItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
