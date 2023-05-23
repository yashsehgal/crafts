
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { MdFingerprint } from "react-icons/md";
import { cn } from "../scripts/cn";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

import { animate, motion } from "framer-motion";

const applicationIcons = [
  { name: "Twitter", content: <TiSocialTwitter /> },
  { name: "Instagram", content: <AiOutlineInstagram /> },
  { name: "YouTube", content: <AiFillYoutube /> },
  { name: "LinkedIn", content: <TiSocialLinkedin /> },
  { name: "Manage Fingerprints", content: <MdFingerprint /> }
]

export default function ApplicationDock() {
  return (
    <div className="application-dock-component-container">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter">ios kinda app dock.</h1>
      <div className="mt-12 application-dock-component w-fit">
        <div className="all-icons-wrapper w-fit flex flex-row items-center justify-center gap-3 p-2.5 rounded-2xl bg-slate-200 -z-10">
          {applicationIcons?.map((appIcon, appIndex) => (
            <motion.div className="w-auto h-auto"
              whileHover={{ y: -12 }}
            >
              <div className={cn("text-3xl p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all hover:scale-125 z-10")} key={appIndex}>
                {appIcon?.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}