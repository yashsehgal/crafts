import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Painting() {
  const POPULATION = 25;
  const [lines, setLines] = React.useState([]);

  // populating lines
  React.useEffect(() => {
    if (lines.length !== POPULATION || lines.length === 0) {
      for (let count = 0; count < POPULATION; count++) {
        setLines([
          ...lines,
          <div
            className="animate-ping w-screen h-1 bg-neutral-100 hover:scale-125 transition-all delay-1000"
          />
        ])
      }
    }
  });

  return (
    <div className="painting">
      <div className="mt-24 grid grid-cols-2 items-center justify-center w-screen">
        {lines.map((line, lineIndex) => {
          return <motion.div
            style={{
              transform: `rotate(${(Math.random() * (100**1.2))}deg)`
            }}
            key={lineIndex}
          >
            {line}
          </motion.div>
        })}
      </div>
      <div className="mt-24 grid grid-cols-3 items-center justify-center">
        {lines.map((line, lineIndex) => {
          return <motion.div
            style={{
              transform: `rotate(${(Math.random() * (100**1.2))}deg)`
            }}
            key={lineIndex}
          >
            {line}
          </motion.div>
        })}
      </div>
      <div className="mt-24 grid grid-cols-4 items-center justify-center">
        {lines.map((line, lineIndex) => {
          return <motion.div
            style={{
              transform: `rotate(${(Math.random() * (100**1.2))}deg)`
            }}
            key={lineIndex}
          >
            {line}
          </motion.div>
        })}
      </div>
      <div className="mt-24 grid grid-cols-3 items-center justify-center">
        {lines.map((line, lineIndex) => {
          return <motion.div
            style={{
              transform: `rotate(${(Math.random() * (100**1.2))}deg)`
            }}
            key={lineIndex}
          >
            {line}
          </motion.div>
        })}
      </div>
      <div className="mt-24 grid grid-cols-2 items-center justify-center">
        {lines.map((line, lineIndex) => {
          return <motion.div
            style={{
              transform: `rotate(${(Math.random() * (100**1.2))}deg)`
            }}
            key={lineIndex}
          >
            {line}
          </motion.div>
        })}
      </div>
    </div>
  )
}