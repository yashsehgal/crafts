/**
 * todo: To create a onboarding flow with 4 steps (views)
 * ? screen 01: 
 * @returns OnboardingFlowReactComponent
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaLaptop } from "react-icons/fa";

export default function OnboardingFlow() {
  const [selectedTheme, setSelectedTheme] = useState("");
  return (
    <div className="onboardingFlow-container">
      <motion.div className={`onboardingFlow-card
        bg-gradient-to-b from-neutral-100 to-white rounded-2xl shadow-lg border-8 border-neutral-50
        w-[540px] h-auto px-5 py-4
      `}
      initial={{
        y: 24,
        opacity: 0.2
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        type: "spring",
        bounce: 0.45
      }}
      >
        <div className={`
          onboardingFlow-header-content-wrapper
        `}>
          <h2 className="onboardingFlow-header-title text-neutral-600 font-semibold text-lg">
            {"Select a theme"}
          </h2>
          <p className="onboardingFlow-header-subtitle text-neutral-400 font-normal text-sm">
            {"Choose theme for chat appearance"}
          </p>
        </div>
        <div className="onboardingFlow-contentBody">
          <div className={`onboardingFlow-themeAction-wrapper
            grid grid-cols-3 items-center gap-4 my-4
          `}>
            <DarkModeButton
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
            />
            <LightModeButton
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
            />
            <SystemThemeModeButton
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function DarkModeButton({
  selectedTheme,
  setSelectedTheme
}) {
  let DARKMODE = "dark";
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.button
        className={`
          onboardingFlow-card
          bg-gradient-to-b from-neutral-100 to-white rounded-2xl shadow-lg border-8 border-neutral-50
          w-full h-[100px]
          hover:shadow
          overflow-hidden
          ${selectedTheme === DARKMODE && "border-blue-100 shadow-sm"}
        `}
        onClick={() => setSelectedTheme("dark")}
        initial={{
          y: 12,
          opacity: 0.5
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          type: "spring",
          bounce: 0.50
        }}
      >
        <div className={`dark-mode-chatView 
          w-full h-full
          flex flex-row bg-neutral-800
        `}>
          <div className="sidebar-wrapper w-6 h-full bg-neutral-700" />
          <div className="chatView-content-wrapper w-full p-2 h-full flex flex-col gap-1.5">
            <div className="chat-skeleton-line h-2 rounded-full w-12 bg-neutral-600" />
            <div className="chat-skeleton-line h-4 rounded w-8 bg-neutral-600" />
            <div className="chat-skeleton-line h-2 rounded w-10 bg-neutral-400" />
            <div className="chat-skeleton-line h-2 rounded w-16 bg-neutral-400" />
            <div className="chat-skeleton-line h-2 rounded-full w-6 bg-neutral-600" />
          </div>
          <div className="sidebar-wrapper w-2 h-full bg-neutral-700" />
        </div>
      </motion.button>
      <p className="text-sm font-medium text-neutral-600">Dark</p>
    </div>
  )
}

function LightModeButton({
  selectedTheme,
  setSelectedTheme
}) {
  let LIGHTMODE = "light";
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.button
        className={`
          onboardingFlow-card
          bg-gradient-to-b from-neutral-100 to-white rounded-2xl shadow-lg border-8 border-neutral-50
          w-full h-[100px]
          hover:shadow
          overflow-hidden
          ${selectedTheme === LIGHTMODE && "border-blue-100 shadow-sm"}
        `}
        onClick={() => setSelectedTheme("light")}
        initial={{
          y: 12,
          opacity: 0.5
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          type: "spring",
          bounce: 0.50
        }}
      >
        <div className={`light-mode-chatView 
          w-full h-full
          flex flex-row bg-neutral-100
        `}>
          <div className="sidebar-wrapper w-6 h-full bg-neutral-300" />
          <div className="chatView-content-wrapper w-full p-2 h-full flex flex-col gap-1.5">
            <div className="chat-skeleton-line h-2 rounded-full w-12 bg-neutral-300" />
            <div className="chat-skeleton-line h-4 rounded w-8 bg-neutral-300" />
            <div className="chat-skeleton-line h-2 rounded w-10 bg-neutral-400" />
            <div className="chat-skeleton-line h-2 rounded w-16 bg-neutral-400" />
            <div className="chat-skeleton-line h-2 rounded-full w-6 bg-neutral-300" />
          </div>
          <div className="sidebar-wrapper w-2 h-full bg-neutral-300" />
        </div>
        </motion.button>
        <p className="text-sm font-medium text-neutral-600">Light</p>
      </div>
  )
}

function SystemThemeModeButton({
  selectedTheme,
  setSelectedTheme
}) {
  let SYSTEMTHEME = "system";
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.button
        className={`
          onboardingFlow-card
          bg-gradient-to-b from-neutral-100 to-white rounded-2xl shadow-lg border-8 border-neutral-50
          w-full h-[100px]
          hover:shadow
          overflow-hidden
          ${selectedTheme === SYSTEMTHEME && "border-blue-100 shadow-sm"}
        `}
        onClick={() => setSelectedTheme("system")}
        initial={{
          y: 12,
          opacity: 0.5
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          type: "spring",
          bounce: 0.50
        }}
      >
        <div className={`dark-mode-chatView 
          w-full h-full
          flex flex-col items-center justify-center bg-neutral-100
        `}>
          <FaDesktop className="text-neutral-500" />
        </div>
      </motion.button>
      <p className="text-sm font-medium text-neutral-600">Light</p>
    </div>
  )
}