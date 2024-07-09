/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { FormField, FormItem } from "../../ui/form";
import { Input } from "../../ui/input";

interface TInputProps {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  value?: any;
  disabled?: boolean;
}

const MyInput = ({
  type,
  className,
  name,
  placeholder,
  value,
  disabled,
}: TInputProps) => {
  return (
    <FormField
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="relative">
          {error && (
            <small
              className={cn(
                "absolute -bottom-5 left-4 text-gray-400 font-semibold tracking-[0.5px]"
              )}
            >
              {error?.message}
            </small>
          )}
          <Input
            {...field}
            type={type}
            id={name}
            value={value}
            className={cn(className)}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
          />
        </FormItem>
      )}
    />
  );
};

export default MyInput;
