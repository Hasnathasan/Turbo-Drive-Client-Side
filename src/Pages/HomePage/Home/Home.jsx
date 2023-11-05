import Banner from "../HomeBanner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useTitle from "../../../CustomHooks/useTitle";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import AppSection from "../AppSection/AppSection";

const Home = () => {
  useTitle("Turbo-Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <MiddleBanner></MiddleBanner>
      <AppSection></AppSection>
    </div>
  );
};

export default Home;
