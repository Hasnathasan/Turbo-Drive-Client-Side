import { Button } from "flowbite-react";
import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const ToyRow = ({ toy }) => {
  const { name, productName, category, quantity, price, email } = toy;
  return (
    <tr>
      <th>
        <div className="text-sm md:text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-[#ce72e2] from-[#26cec3]">
          {productName}
        </div>
      </th>
      <td>
        {name}
        <br />
        <div className="badge badge-accent badge-outline">{email}</div>
      </td>
      <td>{category}</td>
      <th>{price}</th>
      <th>{quantity}</th>
      <th>
        <Button outline={true} gradientDuoTone="cyanToBlue">
          View Details
        </Button>
      </th>
    </tr>
  );
};

export default ToyRow;
