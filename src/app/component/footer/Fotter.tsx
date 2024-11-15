import { cn } from "@/utils";
import { ReactNode } from "react";

interface FooterProps {
  className?: string;
  children: ReactNode;
}

export const Footer = ({ className, children }: FooterProps) => {
  return (
    <div
      className={cn(
        "bottom-0 border-t-[1px] w-full items-center flex flex-col py-6 bg-black",
        className
      )}
    >
      {children}
    </div>
  );
};
