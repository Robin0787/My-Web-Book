import { cn } from "@/lib/utils";

const Home = () => {
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
