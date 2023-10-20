import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../scripts/cn";

export default function Deck() {
  // to store the cards data in list format
  const [cards, setCards] = React.useState([
    {
      img: "https://images.unsplash.com/photo-1542396601-dca920ea2807?auto=format&fit=crop&q=80&w=2851&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 0
    },
    {
      img: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1
    },
    {
      img: "https://images.unsplash.com/photo-1542370285-b8eb8317691c?auto=format&fit=crop&q=80&w=2926&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 2
    },
    {
      img: "https://images.unsplash.com/photo-1694250990115-ca7d9d991b24?auto=format&fit=crop&q=80&w=2795&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 3
    },
    {
      img: "https://images.unsplash.com/photo-1696894134328-8fa369f77789?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 4
    },
    {
      img: "https://images.unsplash.com/photo-1696937342199-10bc89eb956f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 5
    }
  ]);
  // static population amount
  const POPULATION = 6;

  // to store and render the selected image
  // by default, the first image is going to get rendered
  const [selected, setSelected] = useState(
    {id: 0, img: cards[0].img}
  );

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowRight") {
        if (cards[selected.id + 1]) {
          setSelected({
            id: selected.id + 1,
            img: cards[selected.id + 1].img
          });
          console.log("here>>>>>>");
        }
      }
    });
  }, []);

  return (
    <div className="deck-container grid grid-cols-1 items w-fit mx-auto">
      <div className="selected-imageRender-wrapper">
        <img
          src={selected.img}
          id="selectedImageRender"
          className="w-[620px] h-[360px] rounded-2xl shadow-xl shadow-neutral-400/60 block mx-auto mb-24"
        />
      </div>
      <div className="cards-deck flex flex-row items-center justify-center gap-4 mb-24">
        {cards.map((card, index) => {
          return (
            <motion.img
              src={card.img}
              key={index}
              className={cn("w-[100px] h-[60px] hover:shadow-xl hover:shadow-neutral-400/60 rounded-xl",
                (selected.img === card.img && "ring-2 ring-offset-2 ring-blue-300 ring-offset-neutral-100")
              )}
              onClick={() => {
                setSelected({...selected, img: card.img});
              }}
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.2,
                animation: "ease-in-out"
              }}
              transition={{
                type: "spring",
                bounce: 0.25,
                duration: 0.25
              }}
            />
          )
        })}
      </div>
    </div>
  )
}