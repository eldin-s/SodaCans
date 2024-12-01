import React from "react";

type Props = {
  number: string;
  title: string;
  description: string;
};

const OrderedCard = ({ number, title, description }: Props) => {
  return (
    <div>
      <span className="text-amber-800 text-3xl pb-2">{number}</span>
      <h3 className="text-[#0f081b] text-4xl py-4">{title}</h3>
      <p className="text-[#0f081b] text-lg">{description}</p>
    </div>
  );
};

export default OrderedCard;
