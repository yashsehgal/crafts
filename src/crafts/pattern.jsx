import { useEffect } from "react";

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
      <div className="flex">
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 3 == 0) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 2 < blockIndex % 3) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 4 == 0) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 6 == 1) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 10.5 > 0) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800" />
              )
            }
          })}
        </div>
        <div className="blocks-container grid grid-cols-10">
          {blocks?.map((block, blockIndex) => {
            if (blockIndex % 3 == 0) {
              return (
                <div className="w-[6px] h-[6px] bg-indigo-500 border border-slate-800" />
              )
            } else {
              return (
                <div className="w-[6px] h-[6px] bg-white border border-slate-800" />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
