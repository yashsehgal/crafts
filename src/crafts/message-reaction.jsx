import { useState } from "react"
import { FaRegSmile } from "react-icons/fa";
import { cn } from "../scripts/cn";

import { motion } from "framer-motion";

export default function MessageReaction() {
  // state-manager for handling reaction-option visibility
  const [reactionAction, setReactionAction] = useState(false);
  // state-manager for handling render for emoji-list for reacting to messages
  const [renderEmojiList, setRenderEmojiList] = useState(false);

  return (
    <div className="message-reaction-component-container">
      <h1 className="leading-snug tracking-tighter text-3xl font-medium">message reactions with magic ✨</h1>
      <div className="mt-16" />
      <div className="message-reaction-container flex flex-row items-center justify-end relative">
        {renderEmojiList && <EmojiList />}
        <div className="message-component flex flex-row items-start justify-end gap-2" 
          onMouseEnter={() => {
            // toggling to reaction visible on mouse hover
            setReactionAction(true);
          }}
          onMouseLeave={() => {
            // toggling to reaction not-visible on leaving mouse hover
            setReactionAction(false);
          }}
        >
          <motion.button className={cn("mt-2 reaction-action-button p-1 rounded-full text-slate-400 text-base hover:bg-slate-200", reactionAction ? "visible" : "hidden")} 
            id="reaction-action" 
            name="reaction" 
            aria-label="react" 
            aria-describedby="react-to-message"
            onClick={() => setRenderEmojiList(!renderEmojiList)}
          >
            <FaRegSmile />
          </motion.button>
          <span>
            <div className="message-block-container bg-blue-500 py-2 px-4 font-medium text-white rounded-md cursor-pointer">
              <span className="message-content-container">Hey beautiful people 👋</span>
            </div>
            <span className="font-normal text-xs text-slate-500 float-right mt-2">Yash</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function EmojiList() {
  const emojis = [
    { content: "⚡️", _id: "spark" },
    { content: "🌱", _id: "grow" },
    { content: "🚀", _id: "rocket" },
    { content: "👋", _id: "wave" },
    { content: "🔥", _id: "fire" },
  ]
  return (
    <motion.div className="emoji-list absolute -top-12 bg-white rounded-full flex flex-row items-center justify-end gap-2 shadow-md px-2 py-1">
      {emojis?.map((emoji, emojiIndex) => (
        <motion.button className={cn("py-1 px-2 text-lg bg-transparent hover:bg-slate-100 rounded-full")} id={emoji?._id} key={emojiIndex} name={emoji?._id}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        >
          {emoji?.content}
        </motion.button>
      ))}
    </motion.div>
  )
}