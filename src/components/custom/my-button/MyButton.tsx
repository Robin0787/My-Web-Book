import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import CircleLoader from "../loaders/CircleLoader";

interface TMyButtonProps {
  className: string;
  loading: boolean;
  children: ReactNode | string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  type?: "button" | "submit" | "reset";
}

const MyButton = ({
  className,
  loading,
  children,
  variant,
  type,
}: TMyButtonProps) => {
  return (
    <Button type={type || "button"} variant={variant} className={className}>
      {loading ? (
        <CircleLoader loader={loading} height="18px" width="18px" />
      ) : (
        children
      )}
    </Button>
  );
};

export default MyButton;
