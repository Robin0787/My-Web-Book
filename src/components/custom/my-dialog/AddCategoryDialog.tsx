import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AddCategoryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-[10%] w-full bg-[#00000030] rounded-b-lg hover:bg-[#00000060] duration-300 cursor-pointer">
          <div className="flex justify-center items-center h-full gap-3 uppercase font-semibold tracking-[0.5px]">
            <span>Add Category</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[500px] h-[300px] z-10 bg-black">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <DialogTitle>Hello</DialogTitle>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddCategoryDialog;
