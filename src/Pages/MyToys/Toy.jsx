import { Button } from "flowbite-react";
import React, { useState } from "react";
import { FaBeer, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Toy = ({ toy, handleDelete }) => {
  const {
    _id,
    name,
    email,
    productName,
    category,
    quantity,
    price,
    photo,
    rating,
  } = toy;
  
  return (
    <tr>
      <th>
        <div className="flex space-x-3">
          <div className="avatar">
            <div className="rounded w-10 h-10 md:w-28 md:h-28">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="text-sm md:text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-[#ce72e2] from-[#26cec3]">
              {productName}
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Price: ${price}
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Quantity: {quantity}
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Category: {category}
            </div>
          </div>
        </div>
      </th>
      <td>
        <h3 className="text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-[#ce72e2] from-[#26cec3]">{name}</h3>
        
        <div className="badge badge-accent badge-outline">{email}</div>
      </td>
      <td>{rating}</td>
      <td>
        <div className="flex gap-3">
        <Button
          onClick={() => handleDelete(_id)}
          outline={true}
          gradientDuoTone="cyanToBlue"
        >
          <FaTrashAlt></FaTrashAlt>
        </Button>
        <Link to={`/edit/${_id}`}>
        <Button outline={true} gradientDuoTone="cyanToBlue">
          <FaEdit></FaEdit>
        </Button>
        </Link>
        
      </div>
      </td>
      
    </tr>
  );
};

export default Toy;
