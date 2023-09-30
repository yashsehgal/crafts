import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion";
import { cn } from "../scripts/cn";

/**
 * 
 * @type for OTP-Input { index, hasValue }
 */

export default function OTPVerification() {
  const INPUT_SIZE = 6;
  // to handle the currentIndex as state
  const [currentSelectedInput, setCurrentSelectedInput] = useState();

  // to handle the backspace event when input(s) is(are) triggered
  const handleBackspace = (current) => {
    // do nothing if the current selected input is on index: 0
    if (!current) return;

    // removing the current input value
    document.querySelector(`#input-${current}`).value = null;
    // focusing the previous input element
    document.querySelector(`#input-${current - 1}`).focus();
  };

  // to handle the next input selection event when input(s) is(are) triggered
  const handleNextInput = (current) => {
    // do nothing if the input length has exceeded,
    // and checking if the KeyPressed is a number key: if not the also return
    if (current === INPUT_SIZE - 1) {
      return;
    };

    // focusing the next input element
    document.querySelector(`#input-${current + 1}`).focus();
  };

  /**
   * 
   * To handle all sorts of events happening in input(s) 
   * and calling sub-methods accordingly.
   * 
   * @param {"Next" | "Backspace" | "Focus"} action 
   * @param {number} current 
   * 
   */
  const handleChangeSequence = (action, current) => {
    switch (action) {
      case "Focus":
        setCurrentSelectedInput(current);
        break;
      case "Backspace":
        handleBackspace(current);
        break;
      case "Next":
        handleNextInput(current);
        break;
      default: break;
    }
  };

  return (
    <div className="otp-verification-component-container bg-gradient-to-tr from-black to-neutral-800 w-screen h-screen flex flex-row items-center justify-center">
      <div className="content-container">
        <h1 className="leading-snug tracking-tight text-white text-2xl mb-1">
          Get authorized via OTP
        </h1>
        <p className="text-neutral-500 mb-6">
          Haven't recieved any text sms, <span className="underline cursor-pointer">Resend OTP</span>
        </p>
        <div className="otp-veriification-input-wrapper flex flex-row items-center justify-center gap-3">
          {Array.from({ length: INPUT_SIZE }).map((_, index) => {
            return (
              <motion.input
                name={index.toString()}
                className={cn("otp-input p-2 text-xl font-medium bg-transparent text-white text-center outline-transparent placeholder:text-neutral-800 border-2 border-neutral-800 rounded-md w-12 h-auto focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 focus:outline-none focus:ring-offset-black")}
                placeholder=""
                key={index}
                maxLength={1}
                minLength={1}
                required
                id={`input-${index.toString()}`}
                onFocus={(e) => handleChangeSequence("Focus", index)}
                onChange={(e) => {
                  if (e.target.value) {
                    handleChangeSequence("Next", currentSelectedInput)
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    // changing the focus state to previous input element
                    handleChangeSequence("Backspace", index);
                  }
                }}
                whileFocus={{
                  scale: 1.150
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}