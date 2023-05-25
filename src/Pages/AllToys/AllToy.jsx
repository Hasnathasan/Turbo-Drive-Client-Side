import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import useTitle from "../../CustomHooks/useTitle";

const AllToy = () => {
  useTitle("Turbo-All toys")
  const toys = useLoaderData();
  return (
    <div className="overflow-x-auto mb-20 mt-5 w-full">
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
            toys?.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllToy;
