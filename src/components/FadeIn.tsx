import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  className?: string,
};

function FadeIn({ children, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
      className={twMerge("", className)}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
