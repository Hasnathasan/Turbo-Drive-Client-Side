import { useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHooks/useTitle";

const Details = () => {
    useTitle("Turbo-Details")
  const toy = useLoaderData();
  const {
    photo,
    productName,
    name,
    email,
    price,
    rating,
    quantity,
    description,
  } = toy;
  return (
    <div className="grid bg-slate-100 grid-cols-1 my-7 items-center justify-center p-5 md:p-10 md:w-11/12 mx-auto md:grid-cols-2 gap-8">
        <div className="rounded overflow-hidden">
            <img className="w-full" src={photo} alt="" />
        </div>
        <div className="p-4">
            <h1 className="text-2xl mb-3 py-2 md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]">{productName}</h1>
            <hr />
            <h3 className="text-slate-500 text-base md:text-base font-semibold my-5"><span className="text-slate-600">Description:</span> {description}</h3>
            <h3 className="text-slate-500 text-base md:text-base font-semibold my-5"><span className="text-slate-600">Price:</span> ${price}</h3>
            <h3 className="text-slate-500 text-base md:text-base font-semibold my-5"><span className="text-slate-600">Quantity:</span> {quantity}</h3>
            <h3 className="text-slate-500 text-base md:text-base font-semibold my-5"><span className="text-slate-600">Rating:</span> {rating}</h3>
            <hr />
            <h3 className="text-slate-500 text-base md:text-base font-semibold my-5"><span className="text-slate-600">Seller:</span> {name}</h3>
            <h3 className="text-slate-500 text-base md:text-base font-semibold my-5"><span className="text-slate-600">Email:</span> {email}</h3>
        </div>
    </div>
  );
};

export default Details;
