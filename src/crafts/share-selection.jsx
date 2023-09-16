import { cn } from "../scripts/cn";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ShareSelection() {
  const topShareProfiles = [
    {
      name: "yash",
      profile: "",
      id: 1
    },
    {
      name: "friends",
      profile: "",
    }
  ];
  return (
    <div className="share-selection-component-container">
      <h1 className="leading-snug tracking-tighter font-medium text-2xl">
        {"share selection component"}
      </h1>
      <div className="post-component mt-10">
        <div
          className={cn("post-content-wrapper w-[460px] h-[260px] overflow-hidden flex flex-row items-center jsutify-center",
              "shadow-xl rounded-2xl")}
        >
          <img
            src="https://images.unsplash.com/photo-1672625603114-441290cf121f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt="beautiful moutain & lake picture"
            aria-description="post uploaded by Yash Sehgal"
            aria-label="post-upload"
            id="post"
            className="hover:scale-110 transition-all"
          />
        </div>
        <div className="share-selection-activity-wrapper mt-6 relative">
          <div className="share-selection-list-wrapper absolute rounded-full">

          </div>
          <motion.button
            className={cn("text-2xl hover:bg-neutral-100 p-3 rounded-full active:bg-neutral-200",
              "flex flex-row items-center justify-center")}
          >
            <FiSend />
          </motion.button>
        </div>
      </div>
    </div>
  )
}