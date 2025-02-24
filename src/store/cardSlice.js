import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  showCards: false,
  totalItems: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCards: (state, action) => {
      const oldItem = state.itemList.find((el) => el.id === action.payload.id);

      if (oldItem) {
        oldItem.totalPrice += oldItem.price;
        oldItem.totalQuantity++;
      } else {
        state.itemList.push({
          ...action.payload,
          totalQuantity: 1,
        });
      }
      state.totalItems++;
    },

    removeFromCard: (state, action) => {
      const removeItem = state.itemList.find((el) => el.id === action.payload);
      if (removeItem.totalQuantity === 1) {
        state.itemList = state.itemList.filter(
          (el) => el.id !== action.payload
        );
      } else {
        removeItem.totalQuantity--;
        removeItem.totalPrice -= removeItem.price;
      }
      state.totalItems--;
    },
    
    showCards: (state) => {
      state.showCards = !state.showCards;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
