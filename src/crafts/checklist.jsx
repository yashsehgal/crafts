import { useState } from "react"
import { cn } from "../scripts/cn";
import { motion } from "framer-motion";

export default function Checklist() {
  const [checklist, setChecklist] = useState([]);
  const [addItemMode, setAddItemMode] = useState(false);
  const [contentStore, setContentStore] = useState("");

  return (
    <div className="checklist-component-container w-[420px]">
      <h1 className="leading-snug tracking-tighter text-3xl font-medium">checklist but with magic.</h1>
      <div className="checklist-component">
        <div className="checklist-items-container my-4 grid grid-cols-1 gap-2">
          {checklist?.map((checklistItem, checklistIndex) => (
            <motion.button className={cn("w-full py-2 px-4 text-left text-lg font-medium text-slate-500 bg-slate-200 hover:brightness-95 rounded-lg")} 
              key={checklistIndex}
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
            >
              {checklistItem}
            </motion.button>
          ))}
          {!checklist && <p className="text-center font-medium text-base text-slate-500 select-none cursor-default">
              {"No tasks found."}
            </p>}
        </div>
        <div className="checklist-add-item-action-container grid grid-cols-1 my-10 gap-4">
          {addItemMode && <input type="text" placeholder="Enter text" id="text-input" className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2" 
            defaultValue={contentStore}
            onChange={(e) => {
              setContentStore(e.target.value);
            }}
            onKeyDown={(keyEvent) => {
              if (keyEvent.code === 13) {
                setChecklist([
                  ...checklist,
                  contentStore
                ]);
                setAddItemMode(!addItemMode);
                setContentStore("");
              }
            }}
          />}
          <button className="p-2 w-full bg-slate-900 font-medium text-white rounded-lg border border-transparent"
            onClick={() => {
              if (!addItemMode) setAddItemMode(!addItemMode);
              else {
                setChecklist([
                  ...checklist,
                  contentStore
                ]);
                setAddItemMode(!addItemMode);
                setContentStore("");
              }
            }}
          >
            {addItemMode ? "Save item" : "Add new"}
          </button>
        </div>
      </div>
    </div>
  )
}