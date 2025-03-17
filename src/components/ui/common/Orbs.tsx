import { motion } from "framer-motion";

const Orbs = () => (
  <>
    {/* Orb 1 */}
    <motion.div
      className="absolute top-10 left-120 w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 rounded-full filter blur-xl"
      animate={{
        x: [0, 200, -10, 0],
        y: [0, 5, 50, 0],
        transition: {
          bounce: 0.2,
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />

    {/* Orb 2 */}
    <motion.div
      className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 opacity-20 rounded-full filter blur-xl"
      animate={{
        x: [0, -150, -40, 0],
        y: [0, -200, -10, 0],
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        },
      }}
    />

    {/* Orb 3 */}
    <motion.div
      className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 opacity-20 rounded-full filter blur-xl"
      animate={{
        x: [0, -250, 200, 0],
        y: [0, 300, -200, 0],
        transition: {
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        },
      }}
    />
  </>
);

export default Orbs;
