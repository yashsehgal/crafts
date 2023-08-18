import { useEffect, useState } from "react";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { MdFingerprint } from "react-icons/md";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { motion } from "framer-motion";
import { cn } from "../scripts/cn";

const applicationIcons = [
  { name: "Twitter", content: <TiSocialTwitter /> },
  { name: "Instagram", content: <AiOutlineInstagram /> },
  { name: "YouTube", content: <AiFillYoutube /> },
  { name: "LinkedIn", content: <TiSocialLinkedin /> },
  { name: "Manage Fingerprints", content: <MdFingerprint /> },
];

export default function TabSwitch() {
  const [toggleContext, setToggleContext] = useState({
    // make isCommandPressed true when cmd + j is triggered
    isCombinationPressed: false,
    selectedAppAddress: 0,
    visibility: false,
  });

  useEffect(() => {
    const handleKeyCombinationTrigger = function (e) {
      console.info({
        message: "event triggered",
        keycode: e.which,
      });

      if (e.metaKey && e.key === "j") {
        console.log("combination triggered");
        setToggleContext({
          ...toggleContext,
          isCombinationPressed: !toggleContext.isCombinationPressed && true,
          visibility: true,
        });
      }

      if (toggleContext.isCombinationPressed && e.key === 'j') {
        setToggleContext({
          ...toggleContext,
          visibility: true,
          selectedAppAddress: 
            ((applicationIcons.length) / (toggleContext.selectedAppAddress || 1) === 1 
                ? 0 : toggleContext.selectedAppAddress + 1)
        })
      }
    };

    window.addEventListener("keydown", handleKeyCombinationTrigger);
    window.addEventListener("keyup", () => {
      setToggleContext({
        ...toggleContext,
        visibility: false,
      });
    });
  });

  return (
    <div className="tab-switch-component-container">
      <h1 className="text-2xl tracking-tighter font-medium">
        {"ios kinda tab switch 🍕"}
      </h1>
      <div className="tab-switch-component my-12 w-fit h-fit shadow-xl rounded-3xl overflow-hidden">
        <div className="desktop-view-container w-[560px] h-[320px] rounded-3xl shadow-inner overflow-hidden">
          {toggleContext.visibility && (
            <div className="all-icons-wrapper p-2.5 rounded-2xl bg-slate-200/40 shadow-inner flex flex-row items-center justify-center gap-3 mb-6">
              {applicationIcons.map((appIcon, appIconIndex) => {
                return (
                  <motion.div
                    className={cn(
                      "w-auto h-auto"
                    )}
                    whileHover={{ y: -12 }}
                    key={appIconIndex}
                    initial={{
                      scale: 0.6,
                    }}
                    animate={{
                      scale: 1
                    }}
                    transition={{
                      type: "spring",
                    }}
                  >
                    <div
                      className={cn(
                        "text-3xl p-4 bg-white shadow-md rounded-2xl cursor-pointer select-none transition-all hover:scale-125 z-10",
                        toggleContext.selectedAppAddress === appIconIndex 
                        && "bg-gray-900 text-gray-200"
                      )}
                    >
                      {appIcon?.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
