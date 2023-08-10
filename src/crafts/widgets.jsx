import { FaCloud, FaPlus } from "react-icons/fa";
import { cn } from "../scripts/cn";
import { motion } from "framer-motion";
import { useState } from "react";

import YashMedia from "./media/yash.jpg";

export default function Widgets() {
  const [widgetContainerHover, setWidgetContainerHover] = useState(false);
  return (
    <div className="widgets-container">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter"></h1>
      <div
        className="widgets-component mt-12 p-0 bg-gray-200 rounded-[46px] box-content transition-all hover:p-2 shadow-inner h-56 overflow-y-scroll"
        onMouseEnter={() => setWidgetContainerHover(true)}
        onMouseLeave={() => setWidgetContainerHover(false)}
      >
        <TemperatureWidget hoverAnimate={widgetContainerHover} />
        <PhotoCoverWidget hoverAnimate={widgetContainerHover} />
        <EmptyWidget hoverAnimate={widgetContainerHover} />
      </div>
    </div>
  );
}

function TemperatureWidget({ hoverAnimate = false }) {
  return (
    <motion.div
      className={cn(
        "shadow-2xl transition-all temperature-lookup-widget px-6 py-6 w-56 h-56 bg-gray-900 rounded-[40px] grid grid-cols-1 justify-between items-start bg-gradient-to-tr from-gray-900 to-gray-800 select-none",
        hoverAnimate && "scale-90"
      )}
    >
      <div className="upper-layer-container mb-4">
        <p className="city-label text-white tracking-tight font-medium">
          Indore
        </p>
        <p className="temperature-label text-white tracking-tight font-normal text-6xl">
          {"23°"}
        </p>
      </div>
      <div className="lower-layer-container">
        <FaCloud className="text-white" />
        <p className="temp-type text-white tracking-tight font-medium">
          Cloudy
        </p>
        <p className="high-low-temp text-white tracking-tight font-medium">
          {"H:28° L:23°"}
        </p>
      </div>
    </motion.div>
  );
}

function PhotoCoverWidget({ hoverAnimate = false }) {
  return (
    <motion.div
      className={cn(
        "relative shadow-2xl transition-all overflow-hidden temperature-lookup-widget w-56 h-56 rounded-[40px] select-none",
        hoverAnimate && "scale-90"
      )}
    >
      <img src={YashMedia} className="absolute" />
      <div className={"absolute w-full h-full bg-black/25"}>
        <div className="absolute bottom-4 left-4">
          <p className="uppercase font-semibold tracking-tighter text-white">{"bhopal"}</p>
          <h1 className="uppercase font-bold text-5xl text-white tracking-tighter">
            {"god yash"}
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

function EmptyWidget({ hoverAnimate=false }) {
  return (
    <motion.button
      className={cn(
        "relative bg-white flex flex-col items-center justify-center shadow-2xl transition-all overflow-hidden temperature-lookup-widget w-56 h-56 rounded-[40px] select-none active:scale-75 active:after:scale-90 active:bg-gray-100",
        hoverAnimate && "scale-90"
      )}
    >
      <span className="flex flex-row items-center justify-center gap-2 text-gray-500 mt-2 font-medium tracking-tight">
        <FaPlus className="text-gray-500" />{"add widgets"}
      </span>
    </motion.button>
  )
}