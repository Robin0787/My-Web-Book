/* eslint-disable @typescript-eslint/no-explicit-any */
import { DialogHeader } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useDeleteCategoryMutation } from "@/redux/features/category/category.api";
import {
  clearCategory,
  selectCurrentCategory,
} from "@/redux/features/category/category.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import MyButton from "../my-button/MyButton";
import MyDialog from "../my-dialog/MyDialog";
import {} from "../my-form/MyDropDown";
import MyForm from "../my-form/MyForm";

const DeleteCategory = () => {
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const currentCategory = useAppSelector(selectCurrentCategory);
  const dispatch = useAppDispatch();

  async function handleDeleteCategory() {
    setSubmitLoading(true);
    try {
      const res = await deleteCategory(currentCategory!._id).unwrap();
      if (res.success) {
        closeDeleteModal();
        dispatch(clearCategory());
        toast.success(res.message || "Successful");
      }
      setSubmitLoading(false);
    } catch (error: any) {
      setSubmitLoading(false);
      setErrorMessage(error?.data?.message || "Something went wrong!");
    }
  }

  function openDeleteModal() {
    setDeleteModal(true);
  }
  function closeDeleteModal() {
    setDeleteModal(false);
  }
  return (
    <MyDialog
      isOpen={deleteModal}
      handleOpenDialog={openDeleteModal}
      handleCloseDialog={closeDeleteModal}
      controllerBtn={
        <button className="p-[6px] rounded-full text-white hover:text-red-500 duration-300">
          <FaTrashAlt size={15} />
        </button>
      }
    >
      <DialogHeader className="pb-6 text-center text-2xl tracking-[0.5px] capitalize font-bold">
        <DialogTitle>Are you sure?</DialogTitle>
      </DialogHeader>
      <MyForm onSubmit={handleDeleteCategory}>
        <div className="mt-3 relative flex justify-center items-center gap-5">
          <MyButton
            variant={"default"}
            onClick={closeDeleteModal}
            className="bg-[#585858] rounded-full border border-gray-700 p-3 w-full hover:bg-transparent duration-300"
          >
            Cancel
          </MyButton>
          <MyButton
            type="submit"
            variant={"secondary"}
            className="bg-[#585858] rounded-full border border-gray-700 p-3 w-full hover:bg-transparent duration-300"
            loading={submitLoading}
          >
            Delete
          </MyButton>

          <div className={cn("absolute w-full -bottom-7 left-0")}>
            <p
              className={cn(
                "text-sm text-red-500 font-semibold tracking-[0.5px] text-center"
              )}
            >
              {errorMessage}
            </p>
          </div>
        </div>
      </MyForm>
    </MyDialog>
  );
};

export default DeleteCategory;
