import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[15px] px-[24px] py-[10px] transition-all disabled:pointer-events-none  outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)/50]",
  {
    variants: {
      variant: {
        primary: `
          bg-primary
          text-white
          hover:bg-primary-hover 
          active:bg-primary-pressed
          disabled:bg-disabled
          disabled:text-disabled-inner
        `,
      },
      size: {
        sm: "text-[16px] font-medium",
        md: "text-[18px] font-semibold",
        lg: "text-[18px] font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
