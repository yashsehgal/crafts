import { Link, Route, Routes } from "react-router-dom";
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
import PhotoMessageReaction from "./crafts/photo-message-reaction";
import ShareFeature from "./crafts/share-feature";
import SpotifyLyricsSlider from "./crafts/spotify-lyrics-slider";
import TabSwitch from "./crafts/tab-switch";
import TagsContainer from "./crafts/tags-container";
import Toggle from "./crafts/toggle";
import Widgets from "./crafts/widgets";
import ShareSelection from "./crafts/share-selection";
import MathFunctions from "./crafts/math/math-functions";
import Radius from "./crafts/radius";
import CalendarUI from "./crafts/calendar-ui";
import OTPVerification from "./crafts/otp-verify";
import AnimatedHeroSection from "./crafts/animated-hero";
import Painting from "./crafts/painting";
import AuthFlow from "./crafts/auth-flow";
import ShareableList from "./crafts/shareable-list";
import CardAnimationGrid from "./crafts/card-animation";
import Deck from "./crafts/deck";
import GlassComponents from "./crafts/glass-components";
import NotionLikeComponent from "./crafts/notion-like-component";
import OnboardingFlow from "./crafts/onboarding-flow";
import GradientCircle from "./crafts/gradient-circle";

const CraftItems = [
  {
    path: "/ios-app-dock",
    component: <ApplicationDock />,
    title: "iOS inspired application dock",
    description: "",
    isWIP: false,
  },
  {
    path: "/ios-widgets",
    component: <Widgets />,
    title: "iOS inspired widgets",
    isWIP: false,
  },
  {
    path: "/alignment-textbox",
    component: <AlignmentBox />,
    title: "a playable textbox with alignment features",
    isWIP: false,
  },
  {
    path: "/tags-animation",
    component: <TagsContainer />,
    title: "a simple container with tags in marquee",
    isWIP: false,
  },
  {
    path: "/spotify-lyrics-control",
    component: <SpotifyLyricsSlider />,
    title: "spotify inspired lyrics control",
    isWIP: true,
  },
  {
    path: "/pattern-chaos",
    component: <Pattern />,
    title: "chaotic pattern using math",
    isWIP: false,
  },
  {
    path: "/github-timeline",
    component: <GitHubPRTimeline />,
    title: "GitHub inspired PR timeline view",
    isWIP: false,
  },
  {
    path: "/gihtub-comment",
    component: <GitHubComment />,
    title: "GitHub inspired comment textbox with MD support & image paste",
    isWIP: true,
  },
  {
    path: "/calendar-ui",
    component: <CalendarUI />,
    title: "Calendar UI",
    isWIP: true
  },
  {
    path: "/otp-verify",
    component: <OTPVerification />,
    title: "OTP Verification",
    isWIP: false
  },
  {
    path: "/painting",
    component: <Painting />,
    title: "Painting using JS",
  },
  {
    path: "/auth-flow",
    component: <AuthFlow />,
    title: "Magical Authentication Flow",
  },
  {
    path: "/shareable-list",
    component: <ShareableList />,
    title: "Shareable content across lists",
    isWIP: true
  },
  {
    path: "/card-animations-grid",
    component: <CardAnimationGrid />,
    title: "Animated cards grid",
    isWIP: true
  },
  {
    path: "/deck",
    component: <Deck />,
    title: "Cards animation in deck",
    isWIP: true,
  },
  {
    path: "/glass-components",
    component: <GlassComponents />,
    title: "Glass components"
  },
  {
    path: "/notion-like",
    component: <NotionLikeComponent />,
    title: "Notion-like component"
  },
  {
    path: "/onboarding-flow",
    component: <OnboardingFlow />,
    title: "Onboarding flow"
  }
];

export default function App() {
  return (
    <main className="main-container w-screen h-screen flex flex-row items-center justify-center max-lg:px-6">
      <Routes>
        <Route
          path="/"
          element={
            <div className="grid grid-cols-1 items-start gap-2 -mt-24">
              <h1 className="tracking-tight font-bold text-8xl mb-16 max-lg:text-6xl max-md:text-5xl">
                crafting space of{" "}
                <a href="https://yashsehgal.com" target={"_blank"} className="underline hover:underline-offset-[20px] hover:bg-orange-600">
                  yash
                </a>
              </h1>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-h-[500px] overflow-y-scroll">
              {CraftItems.map((craft, craftIndex) => (
                <Link
                  to={craft.path}
                  key={craftIndex}
                  className="font-medium tracking-tighter text-lg text-gray-800 hover:text-orange-500 flex flex-row items-center justify-start gap-2 w-fit h-auto"
                >
                  <span className="underline">{craft.title}</span>
                  {craft.isWIP && (
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium truncate max-md:text-xs">
                      still experimenting
                    </span>
                  )}
                </Link>
              ))}
              </div>
            </div>
          }
        />
        {CraftItems.map((craft, craftIndex) => {
          return (
            <Route
              path={craft.path}
              element={craft.component}
              key={craftIndex}
            />
          );
        })}
      </Routes>
    </main>
  );
}
