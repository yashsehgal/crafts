
import AlignmentBox from "./crafts/alignment-box";
import ApplicationDock from "./crafts/application-dock";
import Checklist from "./crafts/checklist";
import MessageReaction from "./crafts/message-reaction";
import Pattern from "./crafts/pattern";
import TagsContainer from "./crafts/tags-container";

export default function App() {
  return (
    <main className="main-container flex h-[100vh] w-[100vw] flex-row items-center justify-center bg-slate-50">
      {null || <span className="text-slate-400 select-none cursor-default font-medium">{"What are you buidling today, sweetheart?"}</span>}
    </main>
  )
}
