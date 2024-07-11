import { TWebsite } from "@/types/types.website";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const MainItem = ({ item }: { item: TWebsite }) => {
  const { logo, name, url, rounded } = item;

  return (
    <div
      className="bg-black/10  rounded-lg relative group border border-gray-700  hover:bg-black/30 duration-300"
    >
      <div className="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
        <div className="w-full h-full">
          {/* Logo Field */}
          <div className="w-full py-5 2xl:py-3">
            <img
              src={logo}
              alt="logo"
              className={`h-10 w-10 2xl:h-12 2xl:w-12 bg-[#ffffff20] hover:bg-[#ffffff40] ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300 ${
                rounded ? "ring-[14px] rounded-full" : "ring-[10px] rounded"
              }`}
              onClick={() => {
                window.open(url);
              }}
            />
          </div>
          {/* Name Field */}
          <div className="w-full mt-5">
            <div
              className="w-full bg-[#ffffff10] py-1 px-3 2xl:py-2 rounded-lg text-center cursor-pointer hover:bg-[#ffffff20] duration-300 item-name overflow-hidden"
              onClick={() => {
                window.open(url);
              }}
            >
              <h3 className="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                {name}
              </h3>
            </div>
          </div>
          {/* Link Field */}
          <div className="mt-2 w-full flex justify-between items-center bg-[#ffffff10] rounded-lg">
            <div className="w-[85%] 2xl:w-[90%]  p-2 text-center overflow-hidden">
              <h4 className="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                {url}
              </h4>
            </div>
            <div
              className="w-[15%] p-2 bg-[#ffffff12] text-primary rounded-r-lg text-center flex justify-center items-center hover:bg-[#ffffff20] duration-300 cursor-pointer"
              onClick={() => {
                window.open(url);
              }}
            >
              <FiExternalLink size={16} />
            </div>
          </div>
          {/* Three dot or setting field */}
          <div className="text-primary hidden group-hover:block absolute top-2 right-2 p-2 bg-transparent hover:bg-white/10 rounded-[8px] duration-300 cursor-pointer">
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;