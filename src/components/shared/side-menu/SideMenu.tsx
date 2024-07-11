import MenuItem from "@/components/custom/menu-item/MenuItem";
import MenuItemSkeleton from "@/components/custom/menu-item/MenuItemSkeleton";
import { useGetCategoriesQuery } from "@/redux/features/category/category.api";
import { TCategory } from "@/types/types.category";

const SideMenu = () => {
  const { data, isLoading } = useGetCategoriesQuery(undefined);

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
        <ul className="w-full flex flex-col justify-center items-center gap-3 list-none px-5 2xl:px-8 py-4">
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
              {categories?.map((category) => (
                <MenuItem key={category._id} category={category} />
              ))}
            </>
          )}
        </ul>
      </article>
      {/* Footer Section */}
      <div className="h-[10%] w-full bg-[#00000030] rounded-b-lg hover:bg-[#00000060] duration-300 cursor-pointer">
        <div className="flex justify-center items-center h-full gap-3 uppercase font-semibold tracking-[0.5px]">
          <span>Add Category</span>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
