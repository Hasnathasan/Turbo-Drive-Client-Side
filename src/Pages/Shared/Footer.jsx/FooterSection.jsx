import React from "react";
import logo from "../../../assets/car.png";
import { Footer } from "flowbite-react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
  return (
      <Footer>
        <div className="w-full h-full p-10 bg-slate-800 rounded-none sm:rounded my-0 md:my-10">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <img className="w-14" src={logo} alt="" />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]">Turbo Drive</h2>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Turbo-Drive</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://github.com/Hasnathasan">Github</Footer.Link>
                  <Footer.Link href="https://www.facebook.com/profile.php?id=100076435238895">Facebook</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Address" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">New York, London (main office)</Footer.Link>
                  <Footer.Link href="#">Dhaka, Bangladesh</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Turbo-Drive™. All Rights Reserved." year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://www.facebook.com/profile.php?id=100076435238895" icon={FaFacebook} />
              <Footer.Icon href="#" icon={FaInstagram} />
              <Footer.Icon href="#" icon={FaTwitter} />
              <Footer.Icon href="#" icon={FaGithub} />
              <Footer.Icon href="#" icon={FaGoogle} />
            </div>
          </div>
        </div>
      </Footer>
  );
};

export default FooterSection;
