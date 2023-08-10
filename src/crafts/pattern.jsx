import { motion } from "framer-motion";
export default function Pattern() {
  const blockPopulationCount = 600;
  let blocks = [];
  function loadBlocks() {
    for (let count = 1; count <= blockPopulationCount; count++) {
      blocks.push("block");
    }
  }
  loadBlocks();
  return (
    <div>
      <h1 className="leading-snug tracking-tighter text-3xl font-medium mb-6">made using react.</h1>
      <motion.div className="flex rounded-full overflow-hidden"
        whileHover={{
          scale: 1.125,
          rotate: 360,
          transition: 2,
          zoom: 10.25
        }}
      >
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 3 === 0) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 rounded-full border border-slate-800 hover:scale-150" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800 rounded-full" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 2 < blockIndex % 3) {
              return (
                <div className="w-[6px] h-[6px] bg-pink-500 border border-slate-800 rounded-full" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800 rounded-full" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 4 === 0) {
              return (
                <div className="w-[6px] h-[6px] bg-teal-500 border border-slate-800 rounded-full" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800 rounded-full" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 6 === 1) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800 rounded-full" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border rounded-full border-slate-800" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 10.5 > 0) {
              return (
                <div className="w-[6px] h-[6px] bg-gray-700 rounded-full border border-slate-800" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800 rounded-full" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 3 === 0) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800 rounded-full" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800 rounded-full" />
              )
            }
          })}
        </div>
      </motion.div>
    </div>
  )
}
