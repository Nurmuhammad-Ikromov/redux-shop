import React from "react";
import store from "../../store";
import { cardActions } from "../../store/cardSlice";

const Product = (props) => {

    const addItem = () => {
        store.dispatch(cardActions.addToCards({
            id: props.id,
            name: props.name,
            price: props.price,
            totalPrice: props.price
        }))
    }

    return <li className="w-56 text-center shadow rounded">
        <img className="w-full h-32 rounded-t" src={props.imgURL} alt="" />
        <div className="p-2">
            <h3>{props.name}</h3>
            <p>$ {props.price}</p>

            <button onClick={addItem} className="px-2 py-1 bg-slate-800 text-white">Add to cart</button>
        </div>

    </li>;
};

export default Product;
