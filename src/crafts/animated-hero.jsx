import { motion } from "framer-motion";

export default function AnimatedHeroSection() {
  return (
    <main className="hero-section">
      <header className="flex flex-col items-start">
        <span className="font-medium text-3xl tracking-tighter">Be sycned</span>
        <span className="font-semibold text-7xl tracking-tighter">BeAlright</span>
      </header>
      <div className="flex flex-row items-center justify-start gap-3 mt-12">
        <motion.div
          className={"w-fit px-6 py-3 rounded-xl flex flex-row items-center justify-center bg-gradient-to-tr from-pink-600 to-pink-500 cursor-pointer"}
          whileTap={{
            scale: 30,
            transition: 1,
          }}
        >
          <span className="text-lg text-white">{"Experience"}</span>
        </motion.div>
      </div>
    </main>
  )
}