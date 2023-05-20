import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToy = () => {
  const toys = useLoaderData();
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Seller</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            toys.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllToy;
