import { selectCurrentCategory } from "@/redux/features/category/category.slice";
import { useAppSelector } from "@/redux/hooks";
import { TMeta } from "@/types/types.global";
import DeleteCategory from "../category/DeleteCategory";
import EditCategory from "../category/EditCategory";
import AddWebsite from "../website/AddWebsite";

const MainItemFooter = ({ meta }: { meta: TMeta }) => {
  console.log(meta);
  const category = useAppSelector(selectCurrentCategory);
  return (
    <div className="w-full flex justify-between items-center">
      {category ? (
        <>
          <div className="flex justify-start items-center gap-4">
            <h1 className="capitalize text-white font-semibold 2xl:text-lg">
              {category?.name}
            </h1>
            <div className="flex justify-start items-center gap-[6px]">
              <EditCategory />
              {category.canBeDeleted ? <DeleteCategory /> : ""}
            </div>
          </div>
          <div className="flex justify-center items-center border rounded-lg p-2">
            Pagination
          </div>
          <AddWebsite />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainItemFooter;
