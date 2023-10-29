import { motion } from "framer-motion";
import { useState } from "react";

export default function GlassComponents() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1 className="leading-snug mb-12 font-medium tracking-tight text-2xl">Glass components</h1>
      <div className="glass-components-container flex flex-col items-center gap-6">
        <GlassBadge1 />
        <GlassProfileCard />
        {visible && <GlassProfileCardWithMessageFlow />}
        {!visible && <div className="h-[114px]" />}

        <motion.button
          className={`shadow rounded-lg py-1.5 text-sm font-medium text-white bg-neutral-700 w-[120px]`}
          initial={{
            opacity: 0.5,
            y: 4
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          onClick={() => setVisible(!visible)}
        >
          {!visible ? "Show 🥂": "Done"}
        </motion.button>
      </div>
    </div>
  )
}

function GlassBadge1() {
  return (
    <motion.div
      className={`w-[180px] rounded-lg border border-neutral-300 py-2 px-3 shadow-md backdrop-blur-md bg-opacity-80 bg-gradient-to-b from-white to-neutral-200`}
      initial={{
        opacity: 0.5,
        x: -8
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
    >
      <p className="font-medium text-base text-neutral-800">
        Issue created 
      </p>
      <p className="font-normal text-sm text-neutral-500">
        Issue added to PRO
      </p>
    </motion.div>
  )
}

function GlassProfileCard() {
  return (
    <motion.div
      className={`w-[180px] rounded-lg border border-neutral-300 py-2 px-3 shadow-md backdrop-blur-md bg-opacity-80 bg-gradient-to-b from-white to-neutral-200`}
      initial={{
        opacity: 0.5,
        x: -12
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
    >
      <div className="flex flex-col items-start gap-1 mt-1">
        <img
          src="https://github.com/yashsehgal.png"
          className="w-6 h-6 rounded-full"
        />
        <p className="font-medium text-base text-neutral-800">
          Say Hi to Yash
        </p>
      </div>
      <p className="font-normal text-sm text-neutral-500">
        New team member added @yashsehgal
      </p>
    </motion.div>
  )
}

function GlassProfileCardWithMessageFlow() {
  const [isSayHello, setIsSayHello] = useState(false);
  const [isMessageInputVisibile, setMessageInputVisible] = useState(false);
  const [message, setMessage] = useState("");


  return (
    <motion.div
      className={`w-[240px] cursor-default rounded-lg border border-neutral-300 py-2 px-3 shadow-md backdrop-blur-md bg-opacity-80 bg-gradient-to-b from-white to-neutral-200`}
      initial={{
        opacity: 0.5,
        x: -12
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        type: "spring",
        bounce: 0.65
      }}
      onMouseEnter={() => setIsSayHello(true)}
      onMouseLeave={() => {
        setIsSayHello(false);
        setMessageInputVisible(false);
        setMessage("");
      }}
    >
      <div className="flex flex-col items-start gap-1 mt-1">
        <img
          src="https://github.com/yashsehgal.png"
          className="w-6 h-6 rounded-full"
        />
        <p className="font-medium text-base text-neutral-800">
          Say Hi to Yash
        </p>
      </div>
      <p className="font-normal text-sm text-neutral-500">
        New team member added @yashsehgal
      </p>
      {isSayHello && <div className="relative message-flow mt-4 mb-2">
        <motion.button
          className={`shadow rounded-lg py-1.5 text-sm font-medium text-white bg-neutral-700 w-full`}
          initial={{
            opacity: 0.5,
            y: 4
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          onClick={() => setMessageInputVisible(true)}
        >
          {"Say Hi 👋"}
        </motion.button>
        {isMessageInputVisibile && <div className="absolute message-input-wrapper top-10 ">
        <input
          className="focus:outline-none w-[240px] p-2 px-3 rounded-lg shadow-lg"
          placeholder="Hello, Yash"
        />
      </div>}
      </div>}
    </motion.div>
  )
}