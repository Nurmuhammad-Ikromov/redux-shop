import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
