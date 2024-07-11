import CircleLoader from "../loaders/CircleLoader";

const MenuItemSkeleton = ({ loader }: { loader: boolean }) => {
  return (
    <div className="bg-[#ffffff10] rounded-lg h-[44px] w-full flex justify-center items-center">
      <CircleLoader loader={loader} height="25px" width="25px" />
    </div>
  );
};

export default MenuItemSkeleton;
