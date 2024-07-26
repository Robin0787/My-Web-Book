/* eslint-disable @typescript-eslint/no-explicit-any */
import { DialogHeader } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useEditWebsiteMutation } from "@/redux/features/website/website.api";
import { TWebsite } from "@/types/types.website";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import MyButton from "../my-button/MyButton";
import MyDialog from "../my-dialog/MyDialog";
import MyDropDown, { TOptionItem } from "../my-form/MyDropDown";
import MyForm from "../my-form/MyForm";
import MyInput from "../my-form/MyInput";

const roundedOptions: TOptionItem[] = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];

const EditWebsite = ({ item }: { item: TWebsite }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [editWebsite] = useEditWebsiteMutation();

  async function handleEditWebsite(data: FieldValues) {
    if (data.rounded === "Yes") {
      data.rounded = true;
    } else {
      data.rounded = false;
    }
    setSubmitLoading(true);
    try {
      const updatedData: Partial<TWebsite> = {
        name: data.name,
        url: data.url,
        rounded: data.rounded,
      };
      const payload = {
        id: item._id,
        data: updatedData,
      };
      const res = await editWebsite(payload).unwrap();
      if (res.success) {
        setSubmitLoading(false);
        setErrorMessage(undefined);
        toast.success(res.message || "Successful");
        closeEditModal();
      }
    } catch (error: any) {
      setSubmitLoading(false);
      setErrorMessage(error.message || "Something went wrong!");
    }
  }

  function openEditModal() {
    setEditModal(true);
  }
  function closeEditModal() {
    setEditModal(false);
    setErrorMessage(undefined);
  }

  const defaultValues = {
    name: item.name,
    url: item.url,
    rounded: item.rounded ? "Yes" : "No",
  };

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
      <MyForm onSubmit={handleEditWebsite} defaultValues={defaultValues}>
        <div className="w-full space-y-6">
          <MyInput
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={item.name}
            className="bg-transparent capitalize rounded-full border border-gray-700 px-5 py-[10px] w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-xs"
          />
          <MyInput
            type="text"
            name="url"
            placeholder="URL"
            defaultValue={item.url}
            className="bg-transparent rounded-full border border-gray-700 px-5 py-[10px] w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-xs"
          />
          <MyDropDown
            name="rounded"
            placeholder="Select rounded (for logo)"
            options={roundedOptions}
          />
        </div>
        <div className="mt-10 relative">
          <MyButton
            type="submit"
            variant={"secondary"}
            className="bg-[#585858] rounded-full border border-gray-700 p-4 pb-3 w-full hover:bg-transparent duration-300"
            loading={submitLoading}
          >
            Update
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
