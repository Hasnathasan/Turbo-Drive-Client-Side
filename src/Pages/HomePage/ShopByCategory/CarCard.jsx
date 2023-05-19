import { Card } from "flowbite-react";
import React from "react";

const CarCard = ({toy}) => {
    const {productName, rating, price, photo } = toy;
  return (
    <div className="">
      <Card imgSrc={photo}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {productName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Price: ${price}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Rating: {rating}
        </p>
      </Card>
    </div>
  );
};

export default CarCard;
