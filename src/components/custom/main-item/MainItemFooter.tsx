import { selectCurrentCategory } from "@/redux/features/category/category.slice";
import { useAppSelector } from "@/redux/hooks";
import { FaTrashAlt } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

const MainItemFooter = () => {
  const category = useAppSelector(selectCurrentCategory);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start items-center gap-4">
        <h1 className="uppercase text-white font-semibold 2xl:text-lg">
          {category || "Home"}
        </h1>
        <button className="p-[6px] rounded-full text-white bg-[#ffffff15] hover:bg-[#ffffff25] duration-300">
          <FaTrashAlt size={15} />
        </button>
      </div>
      <button className="text-primary flex justify-start items-center gap-2 uppercase px-3 py-1 2xl:py-2 2xl:px-5 bg-[#ffffff08] hover:bg-[#ffffff20] rounded-[14px] duration-300">
        <IoAddCircle size={20} />
        <span>Add</span>
      </button>
    </div>
  );
};

export default MainItemFooter;
