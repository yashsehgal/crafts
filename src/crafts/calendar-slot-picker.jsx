import { useState } from "react"
import { cn } from "../scripts/cn"
import React from "react";

const timeBlocks = [
  {
    startTime: 1,
    slots: ["01:00", "01:15", "01:30", "01:45"],
    endTime: 2
  },
  {
    startTime: 2,
    slots: ["02:00", "02:15", "02:30", "02:45"],
    endTime: 3
  },
  {
    startTime: 3,
    slots: ["03:00", "03:15", "03:30", "03:45"],
    endTime: 4
  },
  {
    startTime: 4,
    slots: ["04:00", "04:15", "04:30", "04:45"],
    endTime: 5
  }
]

export default function CalendarSlotPicker() {
  const [slotSelection, setSlotSelection] = useState(false);
  return (
    <div className="calendar-slot-picker-component-container w-[360px]">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter">a calendar slot picker.</h1>
      <div className="calendar-slot-picker-component mt-16">
        {timeBlocks.map((block, blockIndex) => (
          <div className="slot-block-container flex flex-row w-full gap-3" key={blockIndex}>
            <span className="slot-start-time-text font-medium text-sm text-slate-500 -mt-2.5">
              {block?.startTime}
            </span>
            <div className="slot-block w-full border-t border-t-slate-300 pt-4">
              {block?.slots?.map((slot, slotIndex) => {
                if (slotIndex > 0) {
                  return (
                    <React.Fragment key={slotIndex}>
                      <div className={cn("slot-box h-10", (slotIndex < 3 && slotIndex !== 0) && "")} 
                        data-timeslot={slot} 
                        slot={slot}
                        id={slot} 
                        aria-details={slot}
                        title={slot}
                        aria-label={slot}
                        onMouseDown={() => {
                          setSlotSelection(true);
                          console.log("holding ", slot);
                        }}
                        onMouseUp={() => {
                          setSlotSelection(false);
                          console.log("unholding", slot);
                        }}
                      >
                        <span className="text-xs font-normal select-none cursor-default">
                          {slot}
                        </span>
                        <span className="sr-only">{slot}</span>
                      </div>
                      <div className={cn("slot-selection-block h-1 bg-blue-500", slotSelection ? "visible" : "hidden")} />
                    </React.Fragment>
                  )
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}