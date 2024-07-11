import CircleLoader from "../loaders/CircleLoader";

const MainItemSkeleton = ({ loader }: { loader: boolean }) => {
  return (
    <div className="py-5 bg-black/10 rounded-lg relative group border border-gray-700 h-[160px] lg:h-[192px]">
      <div className="w-full h-full flex justify-center items-center">
        <CircleLoader loader={loader} />
      </div>
    </div>
  );
};

export default MainItemSkeleton;
