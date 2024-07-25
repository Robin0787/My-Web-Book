/* eslint-disable @typescript-eslint/no-explicit-any */
import { DialogHeader } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import MyButton from "../my-button/MyButton";
import MyDialog from "../my-dialog/MyDialog";
import {} from "../my-form/MyDropDown";
import MyForm from "../my-form/MyForm";

const DeleteWebsite = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  async function handleDeleteCategory() {
    setSubmitLoading(true);
    try {
      console.log("Deleted");
      setSubmitLoading(false);
      closeDeleteModal();
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
        <button className="p-[6px] rounded-full text-gray-400 hover:text-white duration-300">
          <FaTrashAlt size={14} />
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

export default DeleteWebsite;
