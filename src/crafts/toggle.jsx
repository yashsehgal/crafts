import { useState } from "react"
import { motion } from "framer-motion";
import { cn } from "../scripts/cn";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="toggle-container">
      <motion.div role="button"
        className={cn("shadow-inner w-[160px] h-fit rounded-full border border-gray-200 p-2 flex flex-row",
          toggle ? "justify-start" : "justify-end"
        )}
        onClick={() => setToggle(!toggle)}
      >
        <motion.div 
          className={cn("w-[60px] h-[60px] rounded-full bg-gradient-to-r", 
            toggle 
              ? "from-gray-white to-gray-400 shadow-xl shadow-gray-300" 
              : "from-gray-900 to-gray-700"
            )
          }
        />
      </motion.div>
    </div>
  )
}