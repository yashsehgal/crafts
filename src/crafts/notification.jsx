import { motion } from "framer-motion";
import { cn } from "../scripts/cn";

const NotificationData = [
  {
    title: "elon musk replied to your tweet",
    app: "Twitter",
    description: "elon musk replied: yo yash! good work, want to join X?",
    attachments: {
      type: "",
      source: "",
    },
    actions: [

    ]
  },
];

export default function NotificationContainer() {
  return (
    <div className="notification-component-container">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter">
        {"classy and sassy notifications, yo!"}
      </h1>
      <div className="notification-component-wrapper">
        {NotificationData.map((notificationItem, notificationIndex) => 
          <Notification {...notificationItem} key={notificationIndex} /> )}
      </div>
    </div>
  );
}

function Notification(data) {
  return (
    <motion.div 
      className={cn("notification w-full p-4 rounded-2xl border border-gray-300")}
    >

    </motion.div>
  )
}