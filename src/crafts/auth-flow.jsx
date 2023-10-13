import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../scripts/cn";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

export default function AuthFlow() {
  const [view, setView] = useState("email");  // mail or password
  const [mailInput, setMailInput] = useState("");

  return (
    <div className="auth-flow-component-container">
      <div className="auth-flow-view-card w-[420px] border border-neutral-100 shadow-xl shadow-neutral-100 p-4 rounded-xl grid grid-cols-1 gap-3">
        <div className="mb-3">
          <h1 className="leading-snug text-neutral-800 font-bold text-5xl tracking-tight">
            {"Sign in"}
          </h1>
          <p className="text-neutral-500">
            Don&apos;t have an account? <a href="#" className="text-blue-500">Create account</a></p>
        </div>
        {view === "email" && <EmailView mailInput={mailInput} setMailInput={setMailInput} setView={setView} />}
        {view === "password" && <PasswordView />}
        <div className={cn(view === "password" && "grid grid-cols-2 gap-3")}>
          {view === "password" && <button
            className={cn("flex flex-row items-center justify-center gap-3 border border-neutral-200 bg-white text-neutral-800 font-medium text-lg px-6 py-3 rounded-lg w-full hover:shadow-sm hover:transition-all hover:scale-95 active:scale-90 active:transition-all hover:bg-neutral-100")}
            onClick={() => setView("email")}
          >
            {"Go back"}
          </button>}
          {/* continue <> login button */}
          {mailInput && <motion.button
            initial={{
              y: 10
            }}
            animate={{
              y: 0
            }}
            transition={{
              type: "spring",
              bounce: 0.75
            }}
            exit={{
              y: 5
            }}
            className={cn("border border-transparent bg-gradient-to-b from-neutral-700 to-neutral-800 text-neutral-100 font-medium text-lg px-6 py-3 rounded-lg w-full shadow-md hover:shadow-sm hover:transition-all hover:scale-95 active:scale-90 active:transition-all")}
            onClick={() => {
              if (view === "email") {
                setView("password");
              }
            }}
          >
            {view === "email" ? "Continue" : "Sign in"}
          </motion.button>}
        </div>
        <div className="more-auth-method-actions grid grid-cols-1 gap-3">
          <div className="w-full h-[1.5px] bg-neutral-100" />
          <button
            className={cn("flex flex-row items-center justify-center gap-3 border border-neutral-200 bg-white text-neutral-800 font-medium text-lg px-6 py-3 rounded-lg w-full hover:shadow-sm hover:transition-all hover:scale-95 active:scale-90 active:transition-all hover:bg-neutral-100")}
          >
            <FaGithub />
            {"Sign in with GitHub"}
          </button>
          <button
            className={cn("flex flex-row items-center justify-center gap-3 border border-neutral-200 bg-white text-neutral-800 font-medium text-lg px-6 py-3 rounded-lg w-full hover:shadow-sm hover:transition-all hover:scale-95 active:scale-90 active:transition-all hover:bg-neutral-100")}
          >
            <FaGoogle />
            {"Sign in with Google"}
          </button>
          <button
            className={cn("flex flex-row items-center justify-center gap-3 border border-neutral-200 bg-white text-neutral-800 font-medium text-lg px-6 py-3 rounded-lg w-full hover:shadow-sm hover:transition-all hover:scale-95 active:scale-90 active:transition-all hover:bg-neutral-100")}
          >
            <FaTwitter />
            {"Sign in with Twitter"}
          </button>
        </div>
      </div>
    </div>
  )
}

function EmailView({ mailInput, setMailInput, setView }) {
  return (
    <motion.div
      initial={{
        x: -24
      }}
      animate={{
        x: 0
      }}
      transition={{
        type: "spring",
        bounce: 0.6,
      }}
      exit={{
        x: -5
    }}
    >
      <AnimatePresence>
        <input
          type="email"
          placeholder="eg. yash@devolfio.co"
          className="text-lg border border-neutral-300 bg-neutral-50 font-medium px-6 py-3 rounded-lg w-full focus:bg-white focus:shadow-md"
          value={mailInput}
          onChange={(e) => setMailInput(e.target.value)}
          onKeyPress={(e) => {
            if (mailInput) {
              if (e.key === "Enter") {
                setView("password");
              }
            }
          }}
        />
      </AnimatePresence>
    </motion.div>
  )
}

function PasswordView() {
  return (
    <motion.div
      initial={{
        x: 24
      }}
      animate={{
        x: 0
      }}
      transition={{
        type: "spring",
        bounce: 0.6
      }}
      exit={{
        x: 5
      }}
    >
      <AnimatePresence>
      <input
        type="password"
        placeholder="Enter your password"
        className="text-lg border border-neutral-300 bg-neutral-50 font-medium px-6 py-3 rounded-lg w-full focus:bg-white focus:shadow-md"
      />
    </AnimatePresence>
    </motion.div>
  )
}