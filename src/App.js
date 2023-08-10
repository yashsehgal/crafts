
import AlignmentBox from "./crafts/alignment-box";
import ApplicationDock from "./crafts/application-dock";
import CalendarSlotPicker from "./crafts/calendar-slot-picker";
import Checklist from "./crafts/checklist";
import CTASection from "./crafts/cta";
import GitHubComment from "./crafts/github-comment";
import GitHubPRTimeline from "./crafts/github-pr-timeline";
import IOSVolumeManager from "./crafts/ios-volume-manager";
import MagicPattern from "./crafts/magic-pattern";
import MessageReaction from "./crafts/message-reaction";
import MouseElementSelection from "./crafts/mouse-element-selection";
import NotificationContainer from "./crafts/notification";
import PasswordScreen from "./crafts/password-screen";
import Pattern from "./crafts/pattern";
import ShareFeature from "./crafts/share-feature";
import SpotifyLyricsSlider from "./crafts/spotify-lyrics-slider";
import TagsContainer from "./crafts/tags-container";
import Toggle from "./crafts/toggle";
import Widgets from "./crafts/widgets";

export default function App() {
  return (
    <main className="main-container flex h-screen w-screen flex-row items-center justify-center bg-slate-50">
      {<ShareFeature /> || <span className="text-slate-400 select-none cursor-default font-medium">{"What are you buidling today, sweetheart? ✨"}</span>}
    </main>
  )
}
