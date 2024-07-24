import { DialogHeader } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { createCategoryValidationSchema } from "@/schemas/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import Icon from "../icon/Icon";
import iconNames from "../icon/icon.name";
import MyButton from "../my-button/MyButton";
import MyDialog from "../my-dialog/MyDialog";
import MyDropDown, { TOptionItem } from "../my-form/MyDropDown";
import MyForm from "../my-form/MyForm";
import MyInput from "../my-form/MyInput";

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

const EditCategory = () => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [categoryIconName, setCategoryIconName] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  function handleEditCategory(data: FieldValues) {
    if (data.canBeDeleted === "Yes") {
      data.canBeDeleted = true;
    } else {
      data.canBeDeleted = false;
    }

    setSubmitLoading(true);
    console.log(data);
    setSubmitLoading(false);

    setErrorMessage(undefined);
    closeEditModal();
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
        <button className="p-[6px] rounded-full text-white  hover:text-green-500 duration-300">
          <FaEdit size={17} />
        </button>
      }
    >
      <DialogHeader className="pb-6 text-center text-2xl tracking-[0.5px] capitalize font-bold">
        <DialogTitle>Edit Category</DialogTitle>
      </DialogHeader>
      <MyForm
        onSubmit={handleEditCategory}
        resolver={zodResolver(createCategoryValidationSchema)}
        defaultValues={{ name: "Home", canBeDeleted: "Yes" }}
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
                  name == categoryIconName ? "bg-white/30" : "bg-transparent"
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

export default EditCategory;
