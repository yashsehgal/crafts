import { motion } from "framer-motion";
import { cn } from "../scripts/cn";
import React, { useEffect } from "react";

export default function MagicPattern() {
  const layers = 10;
  const blocks = 2;
  const blocksContainer = [];
  const layersContainer = [];
  
  useEffect(() => {
    for (let layerCount = 0; layerCount < layers; layerCount++) {
      for (let blockCount = 0; blockCount < blocks; blockCount++) {
        blocksContainer.push(
          <div 
            className={cn("w-4 h-4 bg-black border border-black rounded-lg")} 
          />
        )
      }
      layersContainer.push(blocksContainer);
    }
  }, []);

  console.log(layersContainer);
  
  return (
    <div className="magic-pattern">
      <div
        className={cn("w-[360px] h-[360px] rounded-full border-2 border-gray-500")}
      >
        {layersContainer?.map((layer, layerIndex) => {
          {layer?.map((block, blockIndex) => {
            return <React.Fragment key={layerIndex + ", " + blockIndex}>
              {block}
            </React.Fragment>
          })}
        })}
      </div>
    </div>
  )
}