import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "tailwind.config.tsflex tailwind.config.tsh-10 tailwind.config.tsw-full tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsborder-slate-200 tailwind.config.tsbg-white tailwind.config.tspx-3 tailwind.config.tspy-2 tailwind.config.tstext-sm tailwind.config.tsring-offset-white file:tailwind.config.tsborder-0 file:tailwind.config.tsbg-transparent file:tailwind.config.tstext-sm file:tailwind.config.tsfont-medium placeholder:tailwind.config.tstext-slate-500 focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-slate-950 focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50 dark:tailwind.config.tsborder-slate-800 dark:tailwind.config.tsbg-slate-950 dark:tailwind.config.tsring-offset-slate-950 dark:placeholder:tailwind.config.tstext-slate-400 dark:focus-visible:tailwind.config.tsring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
