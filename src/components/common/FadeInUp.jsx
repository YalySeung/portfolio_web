import { motion } from "framer-motion";

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.5,
  y = 24,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}