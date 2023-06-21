
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { MdFingerprint } from "react-icons/md";
import { cn } from "../scripts/cn";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

import { animate, motion, useDragControls, Reorder, useMotionValue } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useRef, useState } from "react";

const applicationIcons = [
  { name: "Twitter", content: <TiSocialTwitter /> },
  { name: "Instagram", content: <AiOutlineInstagram /> },
  { name: "YouTube", content: <AiFillYoutube /> },
  { name: "LinkedIn", content: <TiSocialLinkedin /> },
  { name: "Manage Fingerprints", content: <MdFingerprint /> }
]

export default function ApplicationDock() {
  const constraintsRef = useRef(null);
  const controls = useDragControls();

  const x = useMotionValue(0);

  const [applicationOrder, setApplicationOrder]  = useState(applicationIcons);

  return (
    <div className="application-dock-component-container">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter">ios kinda app dock.</h1>
      <motion.div className="mt-20 application-dock-component w-fit"
        ref={constraintsRef}
      >
      
        <div className="all-icons-wrapper p-2.5 rounded-2xl bg-slate-200 -z-10 shadow-inner"
          ref={constraintsRef}
        >
          <Reorder.Group axis={"x"} onReorder={setApplicationOrder} values={applicationOrder} className="flex flex-row items-center justify-center gap-3">
            {applicationIcons?.map((appIcon, appIndex) => (
              <Reorder.Item value={appIcon} id={appIcon?.name} key={appIndex} drag>
                <Tooltip.Provider delayDuration={0.2}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <motion.div className="w-auto h-auto"
                        // drag
                        // dragConstraints={constraintsRef}
                        // dragControls={controls}
                        whileHover={{ y: -12 }}
                      >
                        <div className={cn("text-3xl p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all hover:scale-125 z-10")}>
                          {appIcon?.content}
                        </div>
                      </motion.div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="TooltipContent bg-slate-900 text-sm text-slate-100 font-medium py-2 px-4 rounded-xl" sideOffset={24}>
                        {appIcon?.name}
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </motion.div>
    </div>
  )
}