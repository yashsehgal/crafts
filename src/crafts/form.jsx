import { motion } from "framer-motion";
import { useState } from "react";

export default function Form() {
  const [formContent, setFormContent] = useState("general");
  return (
    <motion.div className="component-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 16
      }}
    >
      <form className="w-[320px] grid grid-cols-1 gap-4" onSubmit={() => setFormContent("password")}>
        {formContent === "general" ? <GeneralDetailsFormContent /> : <>password</>}
      </form>
    </motion.div>
  )
}

function GeneralDetailsFormContent() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-action flex flex-col items-start gap-2">
          <label for="form-firstName"
            className="text-sm font-medium text-slate-500"
          >
            First Name
          </label>
          <input type="text" placeholder="Ben" id="form-firstName" name="form-firstName" aria-label="firstname" aria-required="First name is required" className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2" />
        </div>

        <div className="form-action flex flex-col items-start gap-2">
          <label for="form-lastName"
            className="text-sm font-medium text-slate-500"
          >
            Last Name
          </label>
          <input type="text" placeholder="Ten" id="form-lastName" name="form-lastName" aria-label="lastname" aria-required="Last name is required" className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2" />
        </div>
      </div>

      <div className="form-action flex flex-col items-start gap-2">
        <label for="form-username"
          className="text-sm font-medium text-slate-500"
        >
          Username
        </label>
        <input type="text" placeholder="Create a username" id="form-username" name="form-username" aria-label="username" aria-required="username is required" className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2" />
        <span className="text-xs font-normal text-slate-400">for eg. ben10 or benten</span>
      </div>

      <div class="form-action-buttons-wrapper grid grid-cols-2 gap-4">
        <button className="p-2 w-full bg-slate-50 font-medium text-slate-900 rounded-lg border border-slate-200">
          Login instead?
        </button>
        <button className="p-2 w-full bg-slate-900 font-medium text-white rounded-lg border border-transparent">
          Next
        </button>
      </div>
    </>
  )
}
