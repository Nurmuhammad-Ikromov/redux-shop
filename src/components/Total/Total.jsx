import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
    const itemList = useSelector(state => state.card.itemList)

    let total = itemList.reduce((acc, current, index, total) => 
        acc + total[index].totalPrice, 0)

    return <div className="text-end mt-2">Total: $ {total}</div>;
};

export default Total;
