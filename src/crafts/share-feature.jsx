import { FaCamera, FaMusic, FaRegClock, FaRegPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { cn } from '../scripts/cn';
import { useEffect, useState } from 'react';

export default function ShareFeature() {
  const [shareActionToggle, setShareActionToggle] = useState(false);
  const [isHolded, setIsHolded] = useState(false);

  useEffect(() => {
    if (!isHolded) {
      window.addEventListener('mouseup', (e) => {
        setShareActionToggle(false);
      })
    }
  }, [window]);

  return (
    <div className="share-feature-component-container">
      <div className={cn("share-feature-component relative w-52 h-52 rounded-full flex flex-row items-center justify-center")}
      >
        <motion.button
          className={cn("text-3xl w-fit p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all text-gray-800 hover:scale-125 z-10")}
          onMouseDown={() => {
            setShareActionToggle(true);
            setIsHolded(true);
          }}
          onMouseUp={() => {
            setShareActionToggle(false);
          }}
          onPointerDown={() => {
            setShareActionToggle(true);
            setIsHolded(true);
          }}
          onPointerUp={() => {
            setShareActionToggle(false);
          }}
        >
          <FaRegPaperPlane />
        </motion.button>
        {
          ((shareActionToggle)) &&
          <div className={cn("sub-options-container",
        )}>
          {/* Action for reminder */}
          <motion.button
            className={cn("absolute text-xl w-fit p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none text-gray-800 hover:scale-125 z-10 hover:bg-orange-500 hover:text-white",
              "-top-4 right-12"
            )}
            name="share-reminder"
            aria-label='share-reminder'
            aria-aria-description='share reminder'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ zoom: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 0.1
            }}
          >
            <FaRegClock />
          </motion.button>

          {/* Action for sharing picture */}
          <motion.button
            className={cn("absolute text-xl w-fit p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none text-gray-800 hover:scale-125 z-10 hover:bg-orange-500 hover:text-white",
              "top-[10px] -right-4"
            )}
            name="share-pictire"
            aria-label='share-picture'
            aria-aria-description='share picture'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ zoom: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 0.125
            }}
          >
            <FaCamera  />
          </motion.button>

          {/* Action for sharing music */}
          <motion.button
            className={cn("absolute text-xl w-fit p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none text-gray-800 hover:scale-125 z-10 hover:bg-orange-500 hover:text-white",
              "top-[80px] -right-4"
            )}
            name="share-reminder"
            aria-label='share-reminder'
            aria-aria-description='share reminder'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ zoom: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 0.1
            }}
          >
            <FaMusic />
          </motion.button>
        </div>}
      </div>
    </div>
  )
}