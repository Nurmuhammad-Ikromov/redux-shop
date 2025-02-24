import React from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { cardActions } from "../../store/cardSlice";

const Card = () => {
  const show = () => {
    store.dispatch(cardActions.showCards())
  }
  const quantity = useSelector(state => state.card.totalItems);
  return (
    <div onClick={show} className="px-2 py-1 border-black border rounded-full">
      <span>Card: {quantity} Items</span>
    </div>
  );
};

export default Card;