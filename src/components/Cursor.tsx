import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import fluidCursor from "./hooks/useFluidCursor";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Cursor = ({ children, className }: Props) => {
  useEffect(() => {
    fluidCursor();
  }, []);
  return (
    <div className={twMerge("relative w-full h-full overflow-hidden", className)}>
      <canvas 
          id='fluid' 
          className='absolute top-0 left-0 w-full h-[90vh] z-0' 
        />
      {children}
    </div>
  );
};