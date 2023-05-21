import { useState } from "react";
import { cn } from "../scripts/cn";

import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from "react-icons/ai";

export default function AlignmentBox() {
  const [content, setContent] = useState("");
  const [alignment, setAlignment] = useState("text-left")
  return (
    <div className="alignment-box-component-container w-[560px]">
      <h1 className="leading-snug tracking-tighter font-medium text-3xl">adjust text alignment.</h1>
      <div className="alignment-box-component my-6">
        <input type="text" placeholder="Enter text" id="text-input" className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2" 
          defaultValue={content}
          onChange={(e) => {
            // updating content change on change in input
            setContent(e.target.value);
          }}
        />
        <div className={cn("text-content-display p-6 rounded-md border border-slate-300 border-dashed my-4", alignment)}>
          <h2 className={cn("font-medium text-xl p-2 focus:outline-slate-200", (content ? "text-slate-800" : "text-slate-400 select-none cursor-default"))} contentEditable={true}>{content || "No content found"}</h2>
        </div>

        <div className="alignment-action-layer-wrapper flex flex-row items-center justify-center gap-2">
          <button className="p-2 text-base border border-slate-200 rounded-md hover:bg-slate-200"
            id="alignment-left"
            aria-label="left"
            onClick={() => setAlignment("text-left")}
          >
            <AiOutlineAlignLeft />
          </button>
          <button className="p-2 text-base border border-slate-200 rounded-md hover:bg-slate-200"
            id="alignment-center"
            aria-label="center"
            onClick={() => setAlignment("text-center")}
          >
            <AiOutlineAlignCenter />
          </button>
          <button className="p-2 text-base border border-slate-200 rounded-md hover:bg-slate-200"
            id="alignment-right"
            aria-label="right"
            onClick={() => setAlignment("text-right")}
          >
            <AiOutlineAlignRight />
          </button>
        </div>
      </div>
    </div>
  )
}