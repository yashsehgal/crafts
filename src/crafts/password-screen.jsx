
import { motion } from "framer-motion";
import { cn } from "../scripts/cn";
import { FaLock, FaUnlock } from "react-icons/fa";
import { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  return (
    <div className="password-screen-component-container">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter">
        {/* {"minimal password screen animation"} */}
      </h1>
      <div className="password-screen-component mt-12 flex flex-col items-center justify-start gap-4">
        <div className="password-input-result-wrapper w-fit">
          <motion.div
            className={cn("text-5xl p-6 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all hover:scale-125")}
          >
            {password === "avengers" ? <FaUnlock /> : <FaLock />}
          </motion.div>
        </div>
        <div className="password-input-container my-10">
          <input 
            type="password"
            placeholder="enter your password"
            className={cn("transition-all p-3 w-96 text-center border rounded-xl  border-gray-200 bg-gray-100 font-semibold text-2xl placeholder:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-offset-4", password === "avengers" && "focus:ring-green-400")}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}