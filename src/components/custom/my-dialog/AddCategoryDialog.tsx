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
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import Icon from "../icon/Icon";
import iconNames from "../icon/icon.name";
import MyButton from "../my-button/MyButton";
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
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [categoryIconName, setCategoryIconName] = useState<string | null>(null);
  const [createCategory] = useCreateCategoryMutation();

  const handleCreateCategory = async (data: FieldValues) => {
    if (!categoryIconName) {
      setErrorMessage("Icon is required!");
      return;
    }
    if (data.canBeDeleted === "Yes") {
      data.canBeDeleted = true;
    } else {
      data.canBeDeleted = false;
    }
    const payload: TCreateCategory = data as TCreateCategory;
    payload.icon = categoryIconName as string;
    setSubmitLoading(true);
    setErrorMessage(undefined);
    try {
      const res: TResponseFromAPI<TCategory[]> = await createCategory(
        payload
      ).unwrap();
      if (res.success) {
        toast.success(res.message || "Category is created successfully.");
        handleCloseDialog();
      }
      setSubmitLoading(false);
    } catch (error: any) {
      setSubmitLoading(false);
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
            "bg-[#262626] rounded-lg shadow-[1px_1px_10px_2px] shadow-white/10 border border-gray-700 p-10 w-[70%] md:w-[50%] lg:w-[30%] max-w-[600px] min-w-[350px] relative"
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
              <div
                id="iconList"
                className="relative w-full max-h-[138px] rounded-xl bg-[#262626] px-5 pb-2 pt-8 border border-gray-700 flex flex-wrap gap-2 justify-evenly items-center  overflow-auto"
              >
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-gray-300">
                  Select an icon
                </span>
                {iconNames.map((name, index) => (
                  <p
                    key={index}
                    className={`p-2 hover:bg-white/30 rounded-lg cursor-pointer duration-300 ${
                      name == categoryIconName
                        ? "bg-white/30"
                        : "bg-transparent"
                    }`}
                    onClick={() => setCategoryIconName(name)}
                  >
                    <Icon iconName={name} size={20} />
                  </p>
                ))}
              </div>
              <MyDropDown
                name="canBeDeleted"
                placeholder="Can Be Deleted (optional)"
                options={categoryOptions}
              />
            </div>
            <div className="mt-10 relative">
              <MyButton
                type="submit"
                variant={"secondary"}
                className="bg-[#585858] rounded-full border border-gray-700 p-4  pb-3 w-full hover:bg-transparent duration-300"
                loading={submitLoading}
              >
                Create
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
