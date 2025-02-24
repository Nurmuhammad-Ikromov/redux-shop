import React from "react";
import CardItem from "../CardItem/CardItem";
import { useSelector } from "react-redux";

const CardList = () => {
  const itemList = useSelector(state => state.card.itemList);

  return <ul className="flex flex-col gap-2 justify-center mt-4">
    <li className="grid grid-cols-3 text-white bg-orange-600 px-5 py-4 rounded-md"><span>Name</span> <span className="text-center">Price</span> <span className="text-center">TotalPrice</span></li>
    {
      itemList.map((el) =>
        <CardItem key={el.id} {...el} />
      )
    }
  </ul>;
};

export default CardList;

{/* <li className="grid grid-cols-3 text-white bg-orange-600 px-5 py-4 rounded-md">
<span>Name</span> <span className="text-center">Price</span> <span className="text-center">TotalPrice</span>
</li> */}
