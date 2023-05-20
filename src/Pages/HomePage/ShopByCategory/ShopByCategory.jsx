import { Button, Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CarCard from "./CarCard";
import { AuthContext } from "../../../Provider/AuthProvider";

const ShopByCategory = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("sportscar")
  useEffect( () => {
    setLoading(true);
    fetch(
      `https://toy-marketplace-server-henna.vercel.app/toys?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  },[category])
    
  return (
    <div>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : (
        <div className="my-36">
          <div className="flex gap-5 w-max mx-auto my-7 items-center">
            <Button onClick={() => setCategory("sportscar")} outline={category == "sportscar"? false : true} gradientDuoTone="cyanToBlue">
              Sports Car
            </Button>
            <Button onClick={() => setCategory("truck")} outline={category == "truck"? false : true} gradientDuoTone="cyanToBlue">
              Truck
            </Button>
            <Button onClick={() => setCategory("policecar")} outline={category == "policecar"? false : true} gradientDuoTone="cyanToBlue">
              PoliceCar
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {toys.map((toy) => (
              <CarCard key={toy._id} toy={toy}></CarCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
