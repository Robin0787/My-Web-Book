/* eslint-disable @typescript-eslint/no-explicit-any */
import MyForm from "@/components/custom/my-form/MyForm";
import MyInput from "@/components/custom/my-form/MyInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useCreateCategoryMutation } from "@/redux/features/category/category.api";
import { createCategoryValidationSchema } from "@/schemas/category.schema";
import { TCategory, TCreateCategory } from "@/types/types.category";
import { TResponseFromAPI } from "@/types/types.global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { ImCross } from "react-icons/im";
import MyDropDown, { TOptionItem } from "../my-form/MyDropDown";

const categoryOptions: TOptionItem[] = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];

export interface TAddCategoryDialogProps {
  isOpen: boolean;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
}

function AddCategoryDialog({
  isOpen,
  handleOpenDialog,
  handleCloseDialog,
}: TAddCategoryDialogProps) {
  const [errorMessage, setErrorMessage] = useState();
  const [createCategory] = useCreateCategoryMutation();

  const handleCreateCategory = async (data: FieldValues) => {
    if (data.canBeDeleted === "Yes") {
      data.canBeDeleted = true;
    } else {
      data.canBeDeleted = false;
    }
    const payload: TCreateCategory = data as TCreateCategory;
    try {
      const res: TResponseFromAPI<TCategory[]> = await createCategory(
        payload
      ).unwrap();
      if (res.success) {
        handleCloseDialog();
      }
    } catch (error: any) {
      const message = error?.data?.message;
      setErrorMessage(message);
    }
  };
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild onClick={() => handleOpenDialog()}>
        <Button className="h-[10%] w-full bg-[#00000030] rounded-b-lg hover:bg-[#00000060] duration-300 cursor-pointer">
          <div className="flex justify-center items-center h-full gap-3 uppercase font-semibold tracking-[0.5px]">
            <span>Add Category</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="absolute left-0 top-0 z-10 w-full h-screen flex justify-center items-center bg-black/80 text-white duration-300">
        <section
          className={cn(
            "bg-[#262626] rounded-lg shadow-[1px_1px_10px_2px] shadow-white/10 border border-gray-700 p-10 w-[30%] max-w-[600px] relative"
          )}
        >
          <DialogHeader className="pb-6 text-center text-2xl tracking-[0.5px] capitalize font-bold">
            <DialogTitle>Create Category</DialogTitle>
          </DialogHeader>
          <MyForm
            onSubmit={handleCreateCategory}
            resolver={zodResolver(createCategoryValidationSchema)}
          >
            <div className="w-full space-y-6">
              <MyInput
                type="name"
                name="name"
                placeholder="Name"
                className="bg-transparent rounded-full border border-gray-700 px-5 py-[10px] w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-xs"
              />
              <MyInput
                type="string"
                name="icon"
                placeholder="Icon"
                className="bg-transparent rounded-full border border-gray-700 px-5 py-[10px] w-full outline-none focus:outline-none focus:border-gray-300 duration-300 placeholder:text-xs"
              />
              <MyDropDown
                name="canBeDeleted"
                placeholder="Can Be Deleted (optional)"
                options={categoryOptions}
              />
            </div>
            <div className="mt-10 relative">
              <Button
                type="submit"
                variant={"secondary"}
                className="bg-[#585858] rounded-full border border-gray-700 py-3 w-full hover:bg-transparent duration-300"
              >
                Create
              </Button>
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
          <DialogClose
            onClick={() => handleCloseDialog()}
            aria-label="Close"
            className="absolute -top-4 -right-4 p-3 rounded-full bg-[#262626]"
          >
            <ImCross size={15} />
          </DialogClose>
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default AddCategoryDialog;
