
import AlignmentBox from "./crafts/alignment-box";
import ApplicationDock from "./crafts/application-dock";
import CalendarSlotPicker from "./crafts/calendar-slot-picker";
import Checklist from "./crafts/checklist";
import GitHubComment from "./crafts/github-comment";
import GitHubPRTimeline from "./crafts/github-pr-timeline";
import MessageReaction from "./crafts/message-reaction";
import MouseElementSelection from "./crafts/mouse-element-selection";
import PasswordScreen from "./crafts/password-screen";
import Pattern from "./crafts/pattern";
import SpotifyLyricsSlider from "./crafts/spotify-lyrics-slider";
import TagsContainer from "./crafts/tags-container";
import Widgets from "./crafts/widgets";

export default function App() {
  return (
    <main className="main-container flex h-[100vh] w-[100vw] flex-row items-center justify-center bg-slate-50">
      {<Widgets /> || <span className="text-slate-400 select-none cursor-default font-medium">{"What are you buidling today, sweetheart? ✨"}</span>}
    </main>
  )
}
