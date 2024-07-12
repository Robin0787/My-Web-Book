/* eslint-disable @typescript-eslint/no-explicit-any */
import MainItem from "@/components/custom/main-item/MainItem";
import MainItemFooter from "@/components/custom/main-item/MainItemFooter";
import MainItemSkeleton from "@/components/custom/main-item/MainItemSkeleton";
import { cn } from "@/lib/utils";
import { selectCurrentCategory } from "@/redux/features/category/category.slice";
import { useGetWebsitesQuery } from "@/redux/features/website/website.api";
import { useAppSelector } from "@/redux/hooks";
import { TWebsite } from "@/types/types.website";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const category = useAppSelector(selectCurrentCategory);
  const navigate = useNavigate();
  const { data, isError, error, isLoading } = useGetWebsitesQuery(category);
  const errorMessage =
    (isError && (error as any)?.data?.message) || (error as any)?.error;
  const websites: TWebsite[] = data?.data || [];

  if (errorMessage === "jwt expired") {
    navigate("/login");
  }

  return (
    <section className={cn("h-full w-full rounded-lg")}>
      <section id="scrollBar" className="h-[90%] w-full p-5 overflow-y-auto">
        <section className="h-full">
          {isLoading ? (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
              <MainItemSkeleton loader={true} />
              <MainItemSkeleton loader={true} />
              <MainItemSkeleton loader={true} />
              <MainItemSkeleton loader={true} />
            </section>
          ) : errorMessage ? (
            <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl capitalize">
              <h1>{errorMessage}</h1>
            </section>
          ) : (
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  2xl:grid-cols-5 gap-5">
              {websites.map((item: TWebsite, index: number) => (
                <MainItem key={index} item={item} />
              ))}
            </section>
          )}
        </section>
      </section>
      <section className="h-[10%] w-full bg-[#00000035] rounded-b-lg px-5 flex justify-center items-center overflow-hidden">
        <MainItemFooter />
      </section>
    </section>
  );
};

export default Home;
