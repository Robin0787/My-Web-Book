/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuItem from "@/components/custom/menu-item/MenuItem";
import MenuItemSkeleton from "@/components/custom/menu-item/MenuItemSkeleton";
import AddCategoryDialog from "@/components/custom/my-dialog/AddCategoryDialog";
import { useGetCategoriesQuery } from "@/redux/features/category/category.api";
import { TCategory } from "@/types/types.category";

const SideMenu = () => {
  const { data, isLoading, isError, error } = useGetCategoriesQuery(undefined);
  const errorMessage =
    (isError && (error as any)?.data?.message) || (error as any)?.error;

  const categories: TCategory[] = data?.data || [];

  return (
    <section className="h-full w-full relative">
      {/* Heading Section */}
      <div className="h-[10%] px-5 bg-[#ffffff10] rounded-t-lg">
        <div className="h-full flex justify-center items-center text-white">
          <h1 className="text-2xl font-bold">My Web Book</h1>
        </div>
      </div>
      {/* Categories section */}
      <article id="menuScrollBar" className="h-[80%] overflow-y-auto">
        <ul className="w-full h-full flex flex-col justify-start items-center gap-3 list-none px-5 2xl:px-8 py-4">
          {isLoading ? (
            <>
              <MenuItemSkeleton loader={true} />
              <MenuItemSkeleton loader={true} />
              <MenuItemSkeleton loader={true} />
              <MenuItemSkeleton loader={true} />
              <MenuItemSkeleton loader={true} />
              <MenuItemSkeleton loader={true} />
            </>
          ) : (
            <>
              {errorMessage ? (
                <div className="flex justify-center items-center h-full">
                  <p>{errorMessage}</p>
                </div>
              ) : (
                categories?.map((category) => (
                  <MenuItem key={category._id} category={category} />
                ))
              )}
            </>
          )}
        </ul>
      </article>
      {/* Footer Section */}
      <AddCategoryDialog />
    </section>
  );
};

export default SideMenu;
