/* eslint-disable @typescript-eslint/no-explicit-any */
import { DialogHeader } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { selectCurrentCategory } from "@/redux/features/category/category.slice";
import { useCreateWebsiteMutation } from "@/redux/features/website/website.api";
import { useAppSelector } from "@/redux/hooks";
import { createWebsiteValidationSchema } from "@/schemas/website.schema";
import { TCreateWebsite } from "@/types/types.website";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { IoAddCircle } from "react-icons/io5";
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

const AddWebsite = () => {
  const [websiteModal, setWebsiteModal] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const currentCategory = useAppSelector(selectCurrentCategory);
  const [createWebsite] = useCreateWebsiteMutation();

  async function handleEditCategory(data: FieldValues) {
    if (!data.rounded) {
      setErrorMessage("select rounded is required!");
      return;
    }
    if (data.rounded === "Yes") {
      data.rounded = true;
    } else {
      data.rounded = false;
    }
    setSubmitLoading(true);
    try {
      const payload: TCreateWebsite = {
        name: data.name,
        url: data.url,
        category: currentCategory!.name,
        rounded: data.rounded,
      };
      const res = await createWebsite(payload).unwrap();
      if (res.success) {
        toast.success(res.message || "Successful");
        setSubmitLoading(false);
        closeWebsiteModal();
      }
    } catch (error: any) {
      console.log(error);
      setSubmitLoading(false);
      setErrorMessage(error?.data?.message || "Something went wrong!");
    }
  }

  function openWebsiteModal() {
    setWebsiteModal(true);
  }
  function closeWebsiteModal() {
    setWebsiteModal(false);
  }
  return (
    <MyDialog
      isOpen={websiteModal}
      handleOpenDialog={openWebsiteModal}
      handleCloseDialog={closeWebsiteModal}
      controllerBtn={
        <button className="text-primary flex justify-start items-center gap-2 uppercase px-3 py-1 2xl:py-2 2xl:px-5 bg-[#ffffff10] hover:bg-[#ffffff25] rounded-full duration-300">
          <IoAddCircle size={20} />
          <span>Add</span>
        </button>
      }
    >
      <DialogHeader className="pb-6 text-center text-2xl tracking-[0.5px] capitalize font-bold">
        <DialogTitle>Add Website</DialogTitle>
      </DialogHeader>
      <MyForm
        onSubmit={handleEditCategory}
        resolver={zodResolver(createWebsiteValidationSchema)}
      >
        <div className="w-full space-y-6 mt-3">
          <MyInput
            type="name"
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

export default AddWebsite;
