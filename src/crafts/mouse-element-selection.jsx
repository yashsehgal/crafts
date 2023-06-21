import { useEffect, useState } from "react"
import { cn } from "../scripts/cn";
import { FaHeart } from "react-icons/fa";

export default function MouseElementSelection() {
  
  // used to handle the interaction with the card in general
  // will help us to trigger the bg-color switch functionality
  // @type: <boolean>
  const [hasCardInteraction, setHasCardInteraction] = useState(false);

  // used to handle the interaction with card > cover-image element
  // will help us to trigger it's related elements and blur others
  // @type: <boolean>
  const [coverImageInteraction, setCoverImageInteraction] = useState(false);

  // used to handle the interaction with card > like-action element
  // will help us to trigger it's related elements and blur others
  // @type: <boolean>
  const [likeActionInteraction, setLikeActionInteraction] = useState(false);

  // used to handle the onClick event for likeAction
  // to act as a toggle method for the like event
  const [likeAction, setLikeAction] = useState(false);

  // used to handle the interaction with card > title, location element
  // will help us to trigger it's related elements and blur others
  // @type: <boolean>
  const [textDetailsInteraction, setTextDetailsInteraction] = useState(false);

  // used to handle the interaction with card > share-button element
  // will help us to trigger it's related elements and blur others
  // @type: <boolean>
  const [shareButtonInteraction, setShareButtonInteraction] = useState(false);

  // state and manager to handle combined interaction state 
  // for rendering out-of-focus onto the ui elements
  const [offStateGlobal, setOffStateGlobal] = useState(false);

  useEffect(() => {
    setOffStateGlobal(
      coverImageInteraction ||
      likeActionInteraction ||
      textDetailsInteraction ||
      shareButtonInteraction
    );
  }, [coverImageInteraction, likeActionInteraction, textDetailsInteraction, shareButtonInteraction]);

  return (
    <div className="mouse-element-section-component-container transition-all">
      {/* <h1 className="leading-snug tracking-tighter font-medium text-3xl text-center">
        {"Interactive component selection"}
      </h1> */}
      <div className={cn("mouse-element-section-component box-border w-[520px] h-[320px] rounded-xl mt-12 mx-auto border-4 border-white shadow-inner relative overflow-hidden", hasCardInteraction ? "bg-slate-300" : "bg-slate-200")}>
        <div className="mouse-element__component-content-container absolute top-12 right-12">
          <div className={cn("mouse-element__component-content-card relative bg-white w-[240px] h-[280px] rounded-xl shadow-xl rotate-6 hover:rotate-0 transition-all p-6")}
            onMouseEnter={() => setHasCardInteraction(true)}
            onMouseLeave={() => setHasCardInteraction(false)}
          >
            <div className="cover-image-wrapper w-full h-[120px] relative shadow">
              <img 
                src={"https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60"}
                alt="cover"
                className={cn("w-full h-full absolute cursor-pointer rounded-lg ")}
                onMouseEnter={() => setCoverImageInteraction(true)}
                onMouseLeave={() => setCoverImageInteraction(false)}
              />
              <span className={cn("absolute text-sm font-semibold text-slate-600 -left-32 top-12", coverImageInteraction ?  "visible": "hidden")}>
                <span className={cn("")}>{"Cover Image"}</span>
              </span>
              <button className={cn("rounded-md p-3 bg-white absolute top-3 left-3", likeAction ? "text-pink-500": "text-slate-300")}
                onClick={() => setLikeAction(!likeAction)}
                onMouseEnter={() => setLikeActionInteraction(true)}
                onMouseLeave={() => setLikeActionInteraction(false)}
              >
                <FaHeart />
              </button>
              <span className={cn("absolute text-sm font-semibold text-slate-600 -left-48 top-6", likeActionInteraction ?  "visible": "hidden")}>
                <span className={cn("")}>{`Like Action (${likeAction ? "Liked 🥰" : "Unliked 👀"})`}</span>
              </span>
            </div>
            <div className={cn("mouse-element__component-text-details-wrapper my-3 cursor-pointer relative")}
              onMouseEnter={() => setTextDetailsInteraction(true)}
              onMouseLeave={() => setTextDetailsInteraction(false)}
            >
              <h3 className={cn("font-semibold text-sm text-slate-700")}>
                Mountains and clouds
              </h3>
              <p className={cn("text-xs font-medium text-slate-500")}>
                Planet, earth
              </p>
              <span className={cn("absolute text-sm font-semibold text-slate-600 -left-52 top-3", textDetailsInteraction ?  "visible": "hidden")}>
                <span className={cn("")}>{`Headling with description`}</span>
              </span>
            </div>
            <div className={cn("mouse-element__component-share-button-wrapper my-3 relative")}>
              <button className={cn("p-3 w-full bg-teal-600 rounded-lg text-sm font-medium text-white")}
                onMouseEnter={() => setShareButtonInteraction(true)}
                onMouseLeave={() => setShareButtonInteraction(false)}
              >
                Share in group
              </button>
              <span className={cn("absolute text-sm font-semibold text-slate-600 -left-48 top-6", shareButtonInteraction ?  "visible": "hidden")}>
                <span className={cn("")}>{"Share Button"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}