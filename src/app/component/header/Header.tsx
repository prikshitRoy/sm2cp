import { cn } from "@/utils";
import { ReactNode } from "react";

interface HeaderProps {
  className?: string;
  children: ReactNode;
}

export const Header = ({ className, children }: HeaderProps) => {
  return (
    <div
      className={cn(
        "flex border-b-[1px] border-gray-300 w-full top-0 py-3 px-2 sticky bg-black",
        className
      )}
    >
      {children}
    </div>
  );
};
