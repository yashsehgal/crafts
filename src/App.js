
import AlignmentBox from "./crafts/alignment-box";
import ApplicationDock from "./crafts/application-dock";
import CalendarSlotPicker from "./crafts/calendar-slot-picker";
import Checklist from "./crafts/checklist";
import GitHubPRTimeline from "./crafts/github-pr-timeline";
import MessageReaction from "./crafts/message-reaction";
import MouseElementSelection from "./crafts/mouse-element-selection";
import Pattern from "./crafts/pattern";
import TagsContainer from "./crafts/tags-container";

export default function App() {
  return (
    <main className="main-container flex h-[100vh] w-[100vw] flex-row items-center justify-center bg-slate-50">
      {<GitHubPRTimeline /> || <span className="text-slate-400 select-none cursor-default font-medium">{"What are you buidling today, sweetheart? ✨"}</span>}
    </main>
  )
}
