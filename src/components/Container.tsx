import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("px-9 py-1", className)}>
      {children}
    </div>
  );
};