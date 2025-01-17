/* eslint-disable @typescript-eslint/no-explicit-any */
import MainItem from "@/components/custom/main-item/MainItem";
import MainItemFooter from "@/components/custom/main-item/MainItemFooter";
import MainItemSkeleton from "@/components/custom/main-item/MainItemSkeleton";
import { cn } from "@/lib/utils";
import { selectCurrentCategory } from "@/redux/features/category/category.slice";
import { selectCurrentPage } from "@/redux/features/pagination/pagination.slice";
import {
  TGetWebsiteProps,
  useGetWebsitesQuery,
} from "@/redux/features/website/website.api";
import { useAppSelector } from "@/redux/hooks";
import { TMeta } from "@/types/types.global";
import { TWebsite } from "@/types/types.website";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const category = useAppSelector(selectCurrentCategory);
  const currentPage = useAppSelector(selectCurrentPage);
  const navigate = useNavigate();
  const getWebsitePayload: TGetWebsiteProps = {
    category: category?._id,
    page: currentPage,
  };
  const { data, isError, error, isLoading } =
    useGetWebsitesQuery(getWebsitePayload);
  const errorMessage =
    (isError && (error as any)?.data?.message) || (error as any)?.error;

  const websites: TWebsite[] = data?.data || [];
  const meta: TMeta = data?.meta || {};

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
          ) : meta.data >= 1 ? (
            <>
              <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  2xl:grid-cols-5 gap-5 pb-5">
                {websites.map((item: TWebsite, index: number) => (
                  <MainItem key={index} item={item} />
                ))}
              </section>
            </>
          ) : (
            <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl capitalize">
              <h1>No Websites found!</h1>
            </section>
          )}
        </section>
      </section>
      <section className="h-[10%] w-full bg-[#00000035] rounded-b-lg px-5 flex justify-center items-center overflow-hidden">
        <MainItemFooter meta={meta} />
      </section>
    </section>
  );
};

export default Home;
