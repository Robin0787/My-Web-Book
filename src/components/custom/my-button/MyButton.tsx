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
  onClick?: () => void;
}

const MyButton = ({
  className,
  loading,
  children,
  variant,
  type,
  onClick,
}: TMyButtonProps) => {
  return (
    <Button
      type={type || "button"}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {loading ? (
        <CircleLoader loader={loading} height="18px" width="18px" />
      ) : (
        children
      )}
    </Button>
  );
};

export default MyButton;
