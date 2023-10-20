import React, { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { cn } from "../scripts/cn";

export default function CardAnimationGrid() {
  // to store the cards data in list format
  const [cards, setCards] = useState([]);
  // static population amount
  const POPULATION = 7;

  useEffect(() => {
    if (cards.length !== POPULATION) {
      // populating dummy card data
    for (let count = 0; count < POPULATION; count++) {
      // intentional stopper: to check & stop if limit is reached
      setCards([
        ...cards,
        {
          title: "✨ Implementing Auth Flow",
          issueTag: "#2410",
          tags: ["Feature", "LGTM", "PRO"]
        },
      ])
    }
    }
  });

  return (
    <div className="card-animation-grid grid grid-cols-4 gap-12 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:gap-6">
      {cards?.map((card, index) => {
        return (
          <motion.div
          className={cn("card card-animation",
            "p-4 rounded-md border border-neutral-100 bg-neutral-50",
            "hover:transition-all hover:scale-105 cursor-pointer hover:bg-white"
          )}
          key={index}
        >
            <h1 className="font-medium leading-snug">
              {card.title}
            </h1>
            <div className="tags-container flex flex-row items-center justify-start gap-1.5 truncate mt-6">
              {card.tags.map((tag, tagIndex) => {
                return (
                  <span className="px-1 py-0.5 rounded text-sm text-neutral-600 bg-neutral-200/60 hover:bg-neutral-300/60 transition-all cursor-default"
                    key={tagIndex}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
        </motion.div>
        )
      })}
    </div>
  )
}