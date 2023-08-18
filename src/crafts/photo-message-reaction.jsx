import { animate, motion } from "framer-motion";
import YashPicture from '../lib/media/yash-picture.png';
import { cn } from "../scripts/cn";
import { VscReactions } from 'react-icons/vsc';
import { useEffect, useState } from "react";

export default function PhotoMessageReaction() {
  const [emojis, setEmojies] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="photo-message-reaction-component-container">
      <div className="photo-message-reaction-component">
        <div className="photo-photoActions-wrapper w-[200px] flex flex-col items-center">
          <motion.img 
            src={YashPicture} 
            className="border-2 border-black rounded-3xl h-auto"
            alt="picture-from-yash"
            aria-description="picture sent by yash at time 12:30 am"
            loading="lazy"
            whileTap={{
              scale: 1.6
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
          />
          <div className="photoActions-wrapper w-[180px] my-1.5 flex flex-row items-center justify-between">
            <p className="sent-time-label text-xs text-neutral-500">{"yash, 12:30am"}</p>
            <motion.button
              className={cn("reaction-button border border-transparent= p-1 rounded-full bg-neutral-200 text-sm text-neutral-600 hover:border-gray-300 active:bg-neutral-300")}
              aria-label="reaction-button"
              aria-description="react to the picture sent by yash at time 12:30 am"
              id="action__reaction-button"
            >
              <VscReactions />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}