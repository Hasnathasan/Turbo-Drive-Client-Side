import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Toy from "./Toy";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/useTitle";
import { Button } from "flowbite-react";

const MyToys = () => {
  useTitle("Turbo-My toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortType, setSortType] = useState("");
  const [serchedText, setSerchedText] = useState("");
  useEffect(() => {
    if (user) {
      fetch(`https://toy-marketplace-server-henna.vercel.app/toys?email=${user?.email}&sort=${sortType}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    }
  }, [user, sortType]);

  
  const handleSortBy = (event) => {
    const type = event.target.value;
    if (type === "ascending") {
      setSortType(1);
    } else if (type === "descending") {
      setSortType(-1);
    }
  };
  
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
        fetch(`https://toy-marketplace-server-henna.vercel.app/toys/${id}`, {
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
  const handleSearch = (event) => {
    event.preventDefault()
    fetch(`https://toy-marketplace-server-henna.vercel.app/serchedJobs?serchedText=${serchedText}&email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <div className="overflow-x-auto mb-20 mt-5 w-full">
      <div className="p-1">
        <form onSubmit={handleSearch} className="relative w-1/2 mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setSerchedText(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary2 focus:border-primary2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by name"
            required
          />
          <div className="absolute right-2.5 bottom-1.5">
            <Button
            type="submit"
              outline={true}
              gradientDuoTone="cyanToBlue"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <select
        className="select select-info float-right mb-4 mt-1 w-full max-w-xs"
        onChange={handleSortBy}
      >
        <option>
          Short By
        </option>
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </select>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Product Info</th>
            <th>Seller</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Modify</th>
          </tr>
        </thead>

        <tbody>
          {toys.map((toy) => (
            <Toy key={toy._id} handleDelete={handleDelete} toy={toy}></Toy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
