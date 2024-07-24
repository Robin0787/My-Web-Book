/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ImCross } from "react-icons/im";

export interface TMyDialogProps {
  isOpen: boolean;
  controllerBtn: ReactNode;
  children: ReactNode;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
}

function MyDialog({
  isOpen,
  controllerBtn,
  children,
  handleOpenDialog,
  handleCloseDialog,
}: TMyDialogProps) {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild onClick={() => handleOpenDialog()}>
        {controllerBtn}
      </DialogTrigger>
      <DialogContent className="absolute left-0 top-0 z-10 w-full h-screen flex justify-center items-center bg-black/80 text-white duration-300">
        <section
          className={cn(
            "bg-[#262626] rounded-lg shadow-[1px_1px_10px_2px] shadow-white/10 border border-gray-700 p-10 w-[70%] md:w-[50%] lg:w-[30%] max-w-[600px] min-w-[350px] relative"
          )}
        >
          {children}
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

export default MyDialog;
