import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import FooterSection from "../Shared/Footer.jsx/FooterSection";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default Main;
