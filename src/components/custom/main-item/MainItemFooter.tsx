import { selectCurrentCategory } from "@/redux/features/category/category.slice";
import { useAppSelector } from "@/redux/hooks";
import { TMeta } from "@/types/types.global";
import DeleteCategory from "../category/DeleteCategory";
import EditCategory from "../category/EditCategory";
import MyPagination from "../my-pagination/MyPagination";
import AddWebsite from "../website/AddWebsite";

const MainItemFooter = ({ meta }: { meta: TMeta }) => {
  const category = useAppSelector(selectCurrentCategory);
  return (
    <div className="w-full flex justify-between items-center">
      {category ? (
        <>
          <div className="flex justify-start items-center gap-4">
            <h1 className="capitalize text-white font-semibold 2xl:text-lg text-nowrap">
              {category?.name}
            </h1>
            <div className="flex justify-start items-center gap-[6px]">
              <EditCategory />
              {category.canBeDeleted ? <DeleteCategory /> : ""}
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <MyPagination meta={meta} />
          </div>
          <AddWebsite />
        </>
      ) : (
        <div className="w-full flex justify-center items-center">
          <MyPagination meta={meta} />
        </div>
      )}
    </div>
  );
};

export default MainItemFooter;
