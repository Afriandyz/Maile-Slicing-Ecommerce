import logo from "../../assets/Logo/logo.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="mt-5 p-2">
      <div className="container_1 flex flex-col space-y-5">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="subheadline">
          <p className="text-[#9192A5] text-base w-[80%]">
            We host your empire business today using the latest technologies.
          </p>
        </div>
        <div className="logo flex gap-2">
          <div className="logo_container border border-black w-fit p-2 rounded-full hover:bg-red-600 hover:border-white `hover:text-white transition-all duration-100">
            <BsTelephone size={"25px"} />
          </div>
          <div className="logo_container border border-black w-fit p-2 rounded-full hover:bg-red-600 hover:border-white hover:text-white transition-all duration-100">
            <MdOutlineMail size={"25px"} />
          </div>
          <div className="logo_container border border-black w-fit p-2 rounded-full hover:bg-red-600 hover:border-white hover:text-white transition-all duration-100">
            <FiGlobe size={"25px"} />
          </div>
          <div className="logo_container border border-black w-fit p-2 rounded-full hover:bg-red-600 hover:border-white hover:text-white transition-all duration-100">
            <BiMoviePlay size={"25px"} />
          </div>
        </div>
      </div>

      <div className="contaienr_2 mt-10 ">
        <div className="products flex flex-col gap-4">
          <h1 className="font-bold text-lg">Products</h1>
          <div className="items text-[#9192A5]">
            <ul className="space-y-3">
              <li>Sneakers</li>
              <li>Jackets</li>
              <li>Gadgets</li>
              <li>Home Tools</li>
              <li>Furniture</li>
            </ul>
          </div>
        </div>

        <div className="resources flex flex-col gap-4 mt-3">
          <h1 className="font-bold text-lg">Resources</h1>
          <div className="items text-[#9192A5]">
            <ul className="space-y-3">
              <li>Support 24/7</li>
              <li>Help Center</li>
              <li>How-to Instructions</li>
              <li>Blog & Tips</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="company flex flex-col gap-4 mt-3">
          <h1 className="font-bold text-lg">Company</h1>
          <div className="items text-[#9192A5]">
            <ul className="space-y-3">
              <li>Privacy and Policy</li>
              <li>Terms and Conditions</li>
              <li>Investor Relations</li>
              <li>Join With US</li>
              <li>Our Statistics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
