import midBanner from "../../../assets/midBanner.jpg";
import remote from "../../../assets/remote.png";

const MiddleBanner = () => {
  return (
    <div
      className="py-20 bg-cover px-5 bg-center gap-10 flex flex-col md:flex-row justify-around items-center rounded"
      style={{ backgroundImage: `url(${midBanner})` }}
    >
      <img className="w-full md:w-7/12" src={remote} alt="" />
      <div>
        <h5 className="text-xl text-white">Gaming Collection</h5>
        <h2 className="text-white font-bold text-xl md:text-5xl">
          <span className="text-yellow-400 mb-3 text-3xl">PLAYSTATION 4</span>{" "}
          <br /> Dualshock Controller
        </h2>
        <h6 className="text-base my-5 font-normal text-white">
          SALE PRICE: $125
        </h6>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-4 px-8 font-semibold text-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default MiddleBanner;
