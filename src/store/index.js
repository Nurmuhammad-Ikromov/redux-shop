import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cardSlice from "./cardSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    card: cardSlice.reducer,
  },
});

export default store;
