import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  const { _id, name, productName, category, quantity, price, email } = toy;
  return (
    <tr>
      <th>
        <div className="text-sm md:text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-[#ce72e2] from-[#26cec3]">
          {productName}
        </div>
      </th>
      <td>
        <h5 className="text-xs md:text-lg mb-1 font-semibold text-slate-500">{name}</h5>
        <div className="badge badge-accent badge-outline">{email}</div>
      </td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
      <Link to={`/details/${_id}`}>
        <Button
        className="mt-auto"
      outline={true}
      gradientDuoTone="cyanToBlue"
    >
      View Details
    </Button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
