import { cn } from "@/lib/utils";
import { useGetWebsitesQuery } from "@/redux/features/website/website.api";

const Home = () => {
  const { data } = useGetWebsitesQuery(undefined);
  const websites = data?.data || [];
  console.log(websites);
  return (
    <div
      className={cn(
        "flex justify-center items-center w-2/5 py-16 rounded-xl border border-gray-600"
      )}
    >
      <h1 className={cn("text-3xl font-bold")}>Home</h1>
    </div>
  );
};

export default Home;
