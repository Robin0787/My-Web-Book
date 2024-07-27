import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  nextPage,
  previousPage,
  selectCurrentPage,
  setPage,
} from "@/redux/features/pagination/pagination.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TMeta } from "@/types/types.global";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MyPagination = ({ meta }: { meta: TMeta }) => {
  const dispatch = useAppDispatch();
  const pageNumbers: number[] = Array.from(
    { length: meta.totalPage },
    (_, index) => index + 1
  );
  const currentPage = useAppSelector(selectCurrentPage);

  if (pageNumbers.length < 1 || meta.data < 1) {
    return <></>;
  }
  return (
    <Pagination>
      <PaginationContent className="p-2 flex justify-center items-center gap-6 border-gray-500 rounded-lg">
        <PaginationItem>
          <button
            className="p-2 rounded-lg hover:bg-white/10 duration-300 cursor-pointer disabled:opacity-30 disabled:hover:bg-transparent"
            onClick={() => {
              dispatch(previousPage());
            }}
            disabled={currentPage <= 1}
          >
            <FaAngleLeft size={22} />
          </button>
        </PaginationItem>
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className={`flex justify-center items-center py-1 px-3 rounded-lg  duration-300 cursor-pointer ${
                page === currentPage
                  ? "bg-white/10"
                  : "bg-transparent hover:bg-[#ffffff05]"
              }`}
              onClick={() => {
                dispatch(setPage(page));
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <button
            className="p-2 rounded-lg hover:bg-white/10 duration-300 cursor-pointer disabled:opacity-30 disabled:hover:bg-transparent"
            onClick={() => {
              dispatch(nextPage());
            }}
            disabled={meta.totalPage - currentPage < 1}
          >
            <FaAngleRight size={22} />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MyPagination;
