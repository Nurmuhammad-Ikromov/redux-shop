import React from "react";

const Card = () => {
  const quantity = 5;
  return (
    <div className="px-2 py-1 rounded border-black border rounded-full">
      <span>Card: {quantity} Items</span>
    </div>
  );
};

export default Card;