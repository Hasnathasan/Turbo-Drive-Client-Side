import { Button, Spinner } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CarCard from "./CarCard";
import { AuthContext } from "../../../Provider/AuthProvider";

const ShopByCategory = () => {
  const { loading, setLoading } = useContext(AuthContext);
  console.log(loading);
  const [toys, setToys] = useState([]);
  const handleToys = (category) => {
    setLoading(true);
    fetch(`https://toy-marketplace-server-henna.vercel.app/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  };
  return (
    <div>
      <Tabs>
        <TabList>
            <Tab className={"react-tabs__tab--selected"} >
              <Button
                onClick={() => handleToys("sportscar")}
                outline={true}
                gradientDuoTone="cyanToBlue"
              >
                SPORTS CAR
              </Button>
            </Tab>
            <Tab>
              <Button
                onClick={() => handleToys("truck")}
                outline={true}
                gradientDuoTone="cyanToBlue"
              >
                TRUCK
              </Button>
            </Tab>
            <Tab>
              <Button
                onClick={() => handleToys("policecar")}
                outline={true}
                gradientDuoTone="cyanToBlue"
              >
                POLICE CAR
              </Button>
            </Tab>
        </TabList>

        <TabPanel className={"react-tabs__tab-panel--selected"}>
          {loading ? (
            <div className="h-screen flex justify-center items-center">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {toys.map((toy) => <CarCard key={toy._id} toy={toy}></CarCard>)}
            </div>
          )}
        </TabPanel>
        <TabPanel>
        {loading ? (
            <div className="h-screen flex justify-center items-center">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {toys.map((toy) => <CarCard key={toy._id} toy={toy}></CarCard>)}
            </div>
          )}
        </TabPanel>
        <TabPanel>
        {loading ? (
            <div className="h-screen flex justify-center items-center">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {toys.map((toy) => <CarCard key={toy._id} toy={toy}></CarCard>)}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
