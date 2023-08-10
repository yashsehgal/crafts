import { motion } from "framer-motion";
import { cn } from "../scripts/cn";
import { useEffect, useState } from "react";

export default function IOSVolumeManager() {
  const [volume, setVolume] = useState(20);
  const [holdingTrack, setHoldingTrack] = useState(false);

  const handleVolumeTrackOnHold = () => {
    console.log("working");
    document.addEventListener('pointermove', e => {
      setVolume(vol => (e.screenY * 0.125) - vol);
      console.log(volume);
    })
  };

  return (
    <div className="ios-volume-manager-component-container">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter">
        {"iOS inspired volume manager"}
      </h1>
      <div className="ios-volume-manager-component w-fit mx-auto my-24">
        <motion.div
          className={cn("flex flex-col items-center justify-end w-[180px] h-[360px] bg-gray-200 rounded-[42px] overflow-hidden")}
          whileTap={{
            scale: 1.25,
          }}
          onPointerEnter={() => {
            setHoldingTrack(true);
            handleVolumeTrackOnHold();
          }}
          onPointerLeave={() => {
            console.log("stopped holding");
            setHoldingTrack(false);
          }}
        >
          <motion.div
            className={cn("w-full bg-gray-500")}
            style={{
              height: `${(volume / 300) * 100}px`
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}