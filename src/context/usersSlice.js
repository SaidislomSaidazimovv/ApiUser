import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },

  reducers: {
    addUsers(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },

    removeFromUsers(state, action) {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.value));
    },

    // editFromUsers(state, action) {
    //   state.value = state.value.map((user) =>
    //     user.id === action.payload.id ? action.payload : user
    //   );
    //   localStorage.setItem("users", JSON.stringify(state.value));
    // },
  },
});

export const { addUsers, removeFromUsers, editFromUsers } = usersSlice.actions;
export default usersSlice.reducer;
