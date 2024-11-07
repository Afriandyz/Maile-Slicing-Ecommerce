import { GoArchive } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";
import { FaCarRear } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdFlight } from "react-icons/md";


const Categories = () => {
  return (
    <section className="mt-5 p-2">
      <div className="title flex justify-between items-center mb-2">
        <h1 className="font-extrabold text-2xl w-[50%]">
          Explore Our Categories
        </h1>
        <button className="bg-black text-white p-4 rounded-full">
          View All
        </button>
      </div>

      <div className="wrapper_categories flex flex-wrap gap-3 justify-center">
        <div className="categories w-1/3 rounded-lg flex flex-col items-center p-2 border border-[#D5D9DE]">
          <GoArchive size={"50px"} />
          <h1 className="font-bold text-xl">Fashion</h1>
          <p className="text-[#D5D9DE] font-medium text-sm">837 items</p>
        </div>
        <div className="categories w-1/3 rounded-lg flex flex-col items-center p-2 border border-[#D5D9DE]">
          <GoCodespaces size={"50px"} />
          <h1 className="font-bold text-xl">Gadgets</h1>
          <p className="text-[#D5D9DE] font-medium text-sm">664 items</p>
        </div>
        <div className="categories w-1/3 rounded-lg flex flex-col items-center p-2 border border-[#D5D9DE]">
          <FaCarRear size={"50px"} />
          <h1 className="font-bold text-xl">Transport</h1>
          <p className="text-[#D5D9DE] font-medium text-sm">17,490 items</p>
        </div>
        <div className="categories w-1/3 rounded-lg flex flex-col items-center p-2 border border-[#D5D9DE]">
          <HiOutlineOfficeBuilding size={"50px"} />
          <h1 className="font-bold text-xl">Office</h1>
          <p className="text-[#D5D9DE] font-medium text-sm">7,182 items</p>
        </div>
        <div className="categories w-1/3 rounded-lg flex flex-col items-center p-2 border border-[#D5D9DE]">
          <IoFastFoodOutline size={"50px"} />
          <h1 className="font-bold text-xl">Food`</h1>
          <p className="text-[#D5D9DE] font-medium text-sm">883 items</p>
        </div>
        <div className="categories w-1/3 rounded-lg flex flex-col items-center p-2 border border-[#D5D9DE]">
          <MdFlight size={"50px"} />
          <h1 className="font-bold text-xl">Travels</h1>
          <p className="text-[#D5D9DE] font-medium text-sm">54 items</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
