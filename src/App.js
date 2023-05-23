
import AlignmentBox from "./crafts/alignment-box";
import ApplicationDock from "./crafts/application-dock";
import Checklist from "./crafts/checklist";
import MessageReaction from "./crafts/message-reaction";
import Pattern from "./crafts/pattern";

export default function App() {
  return (
    <main className="main-container flex h-[100vh] w-[100vw] flex-row items-center justify-center bg-slate-50">
      <ApplicationDock />
    </main>
  )
}
