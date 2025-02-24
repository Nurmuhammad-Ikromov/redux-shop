import React from "react";
import store from "../../store";
import { cardActions } from "../../store/cardSlice";


const CardItem = ({ id, name, price, totalPrice, totalQuantity }) => {
  return <li className="grid grid-cols-4 bg-orange-400 px-5 py-4 rounded-md">

    <span>{name}</span>
    <span className="text-center">${price}</span>
    <span className="text-center">${totalPrice}</span>

    <div>
      <button onClick={() => store.dispatch(cardActions.removeFromCard(id))} className="p-2 bg-blue-900 text-white">-</button>
      <span>{totalQuantity}</span>
      <button onClick={() => store.dispatch(cardActions.addToCards({
        id,
        price,
        name,
        totalPrice,
      }))} className="p-2 bg-blue-900 text-white">+</button>
    </div>

  </li>;
};

export default CardItem;
