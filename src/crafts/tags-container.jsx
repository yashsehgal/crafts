import { useState } from "react"
import Marquee from "react-fast-marquee";
import { cn } from "../scripts/cn";

import { motion } from "framer-motion";

const tagsData = {
  "first": [
    { name: "growth", content: "🌱" },
    { name: "empathy", content: "💙" },
    { name: "spark", content: "⚡️"  },
    { name: "growth", content: "🌱" },
    { name: "empathy", content: "💙" },
    { name: "spark", content: "⚡️"  },
  ],
  "second": [
    { name: "coffee", content: "☕️" },
    { name: "pizza", content: "🍕" },
    { name: "pancake", content: "🥞" },
    { name: "coffee", content: "☕️" },
    { name: "pizza", content: "🍕" },
    { name: "pancake", content: "🥞" },
    { name: "coffee", content: "☕️" },
  ],
  "third": [
    { name: "spark", content: "⚡️"  },
    { name: "growth", content: "🌱" },
    { name: "empathy", content: "💙" },
    { name: "spark", content: "⚡️"  },
    { name: "coffee", content: "☕️" },
    { name: "pizza", content: "🍕" },
  ]
}

export default function TagsContainer() {
  const [bgGradient, setBGGradient] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  return (
    <div className="tags-container-component">
      <div className={cn("tags-component w-[420px] rounded-xl overflow-hidden border-slate-100", bgGradient ? "bg-gradient-to-r from-blue-700 to-purple-600" : "bg-slate-200")}>
        <Marquee className="p-2 overflow-visible flex flex-row items-center gap-4 shadow-inner">
          <div className="flex flex-row items-center gap-4">
          {tagsData?.first?.map((tag, tagIndex) => (
            <motion.div className="w-auto h-auto"
              key={tagIndex}
            >
            <div className={cn("text-3xl p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all hover:scale-105")}>
              {tag?.content}
            </div>
          </motion.div>
          ))}
          </div>
        </Marquee>

        <Marquee className="p-2 overflow-visible flex flex-row items-center gap-4" direction={"right"}>
          <div className="flex flex-row items-center gap-4">
          {tagsData?.second?.map((tag, tagIndex) => (
            <motion.div className="w-auto h-auto"
              key={tagIndex}
            >
            <div className={cn("text-3xl p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all hover:scale-105")}>
              {tag?.content}
            </div>
          </motion.div>
          ))}
          </div>
        </Marquee>

        <Marquee className="p-2 overflow-visible flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-4">
          {tagsData?.third?.map((tag, tagIndex) => (
            <motion.div className="w-auto h-auto"
              key={tagIndex}
            >
            <div className={cn("text-3xl p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all hover:scale-105")}>
              {tag?.content}
            </div>
          </motion.div>
          ))}
          </div>
        </Marquee>

      </div>
      <div className="tags-component-actions-wrapper">
        <button className="px-4 py-3 text-sm font-medium text-slate-500 bg-slate-200 rounded-xl hover:bg-slate-300 active:brightness-95 mx-auto mt-6"
          onClick={() => setBGGradient(!bgGradient)}
        >
          {bgGradient ? "Hide Gradient" : "Show Gradient"}
        </button>
      </div>
    </div>
  )
}