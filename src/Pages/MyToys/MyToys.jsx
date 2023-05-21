import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Toy from "./Toy";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/useTitle";

const MyToys = () => {
  useTitle("Turbo-My toys")
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://toy-marketplace-server-henna.vercel.app/toys?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    }
  }, [user]);

  console.log(toys);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = toys.filter((toy) => toy._id != id);
              setToys(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {};
  return (
    <div className="overflow-x-auto mb-20 mt-5 w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Product Info</th>
            <th>Seller</th>
            <th>Rating</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <Toy key={toy._id} handleDelete={handleDelete} handleUpdate={handleUpdate} toy={toy}></Toy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
