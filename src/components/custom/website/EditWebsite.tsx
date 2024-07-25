/* eslint-disable @typescript-eslint/no-explicit-any */
import { DialogHeader } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import MyButton from "../my-button/MyButton";
import MyDialog from "../my-dialog/MyDialog";
import MyForm from "../my-form/MyForm";
import MyInput from "../my-form/MyInput";

const EditWebsite = () => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  async function handleEditWebsite(data: FieldValues) {
    setSubmitLoading(true);
    console.log(data);
    setErrorMessage(undefined);
  }

  function openEditModal() {
    setEditModal(true);
  }
  function closeEditModal() {
    setEditModal(false);
  }

  return (
    <MyDialog
      isOpen={editModal}
      handleOpenDialog={openEditModal}
      handleCloseDialog={closeEditModal}
      controllerBtn={
        <button className="p-2">
          <FaEdit size={15} />
        </button>
      }
    >
      <DialogHeader className="pb-6 text-center text-2xl tracking-[0.5px] capitalize font-bold">
        <DialogTitle>Edit Website</DialogTitle>
      </DialogHeader>
      <MyForm onSubmit={handleEditWebsite}>
        <div className="w-full space-y-6">
          <MyInput
            type="text"
            name="name"
            placeholder="Name"
            className="bg-transparent rounded-full border border-gray-700 px-5 py-[10px] w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-xs"
          />
          <MyInput
            type="text"
            name="url"
            placeholder="URL"
            className="bg-transparent rounded-full border border-gray-700 px-5 py-[10px] w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-xs"
          />
        </div>
        <div className="mt-10 relative">
          <MyButton
            type="submit"
            variant={"secondary"}
            className="bg-[#585858] rounded-full border border-gray-700 p-4 pb-3 w-full hover:bg-transparent duration-300"
            loading={submitLoading}
          >
            Submit
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

export default EditWebsite;
