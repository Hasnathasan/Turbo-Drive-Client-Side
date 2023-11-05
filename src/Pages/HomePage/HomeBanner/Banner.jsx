import { Carousel } from "flowbite-react";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";

const Banner = () => {
  return (
    <div className="h-[500px] xl:h-[530px] 2xl:h-[660px]">
      <Carousel>
        <div
          className={`flex items-end justify-center text-center h-full bg-no-repeat bg-cover bg-center bg-gray-400 dark:bg-gray-700 dark:text-white`}
          style={{
            backgroundImage: `url(${"https://www.hdnicewallpapers.com/Walls/Big/Lamborghini/4K_Car_Wallpaper_of_2019_Lamborghini_SC18_Alston.jpg"})`,
          }}
        >
          <div className="mb-7">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Discover a World of Joy
            </h1>
            <h4 className="text-sm md:text-base font-semibold text-white">
              Welcome to our Toy Marketplace, the ultimate destination for all
              your toy desires! Step into a world filled with wonder.
            </h4>
          </div>
        </div>
        <div
          className="flex h-full items-center bg-cover bg-center bg-no-repeat bg-gray-400 dark:bg-gray-700 dark:text-white"
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className="ml-7">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white">
              Discover a World of Joy
            </h1>
            <h4 className="text-sm md:text-base font-semibold text-white">
              Welcome to our Toy Marketplace, the ultimate destination for all
              your toy desires! Step into a world filled with wonder.
            </h4>
          </div>
        </div>
        <div
          className="h-full bg-cover bg-center bg-no-repeat bg-gray-400 dark:bg-gray-700 dark:text-white"
          style={{ backgroundImage: `url(${banner3})` }}
        >
          <div className="mt-9 ml-7">
            <h1 className="text-3xl md:text-6xl font-bold mb-3 text-slate-600">
              Discover a World of Joy
            </h1>
            <h4 className="text-sm md:text-base font-semibold text-slate-500">
              Welcome to our Toy Marketplace, the ultimate destination for all
              your toy desires! Step into a world filled with wonder.
            </h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
