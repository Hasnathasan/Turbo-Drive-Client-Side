import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({toy}) => {
    const {_id, productName, rating, price, photo } = toy;
  return (
    <div>
      <Card className="h-full flex flex-col" imgSrc={photo}>
        <h5 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-[#d786e9] from-[#29ccc1]">
          {productName}
        </h5>
        <div className="flex justify-between mb-4 items-center">
            <p className="font-semibold text-gray-700">
          Price: ${price}
        </p>
        <p className="font-semibold text-gray-700">
          Rating: {rating}
        </p>
        </div>
        <Link to={`/details/${_id}`}>
        <Button
        className="mt-auto"
      outline={true}
      gradientDuoTone="cyanToBlue"
    >
      View Details
    </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CarCard;
