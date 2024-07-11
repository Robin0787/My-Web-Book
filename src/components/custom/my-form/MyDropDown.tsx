import { FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type TOptionItem = {
  value: string;
  label: string;
};

export type TInputSelectProps = {
  name: string;
  options: TOptionItem[];
  placeholder?: string;
};

const MyDropDown = ({ name, options, placeholder }: TInputSelectProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange}>
            <SelectTrigger className="flex justify-between items-center gap-2 bg-transparent rounded-full border border-gray-700 px-5 py-[10px] w-full outline-none focus:outline-none  duration-300 text-xs tracking-[0.5px] text-gray-100 hover:border-gray-300 hover:text-gray-200">
              <SelectValue placeholder={placeholder} className="capitalize" />
            </SelectTrigger>
            <SelectContent className="min-w-[373px] z-50 text-white rounded-lg bg-[#262626] border border-gray-700 overflow-hidden">
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    key={option.label}
                    value={option.value}
                    className="flex flex-row-reverse justify-between items-center px-5 py-[6px] cursor-pointer"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default MyDropDown;
