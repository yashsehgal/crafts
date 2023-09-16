
declare type TimeSlots = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

declare type TimelineType = Array<{
  title: string;
  description: string;
  attachments: Array<{
    name: string;
    type: "link" | "document" | "image" | "video" | "GIF";
  }>;
  time: {
    start: TimeSlots;
    end: TimeSlots;
  };
  members: Array<{
    name: string;
    mail: string;
    isManager: boolean;
    rsvpStatus: "Yes" | "Maybe" | "No";
    statusMessage: string;
  }>;
}>;

declare type CalendarBoxType = {
  authorInfo: {
    name: string;
    mail: string;
  };
  data: Array<{
    day: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    shortName: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
    timeline: {
      "0": TimelineType;
      "1": TimelineType;
      "2": TimelineType;
      "3": TimelineType;
      "4": TimelineType;
      "5": TimelineType;
      "6": TimelineType;
      "7": TimelineType;
      "8": TimelineType;
      "9": TimelineType;
      "10": TimelineType;
      "11": TimelineType;
      "12": TimelineType;
      "13": TimelineType;
      "14": TimelineType;
      "15": TimelineType;
      "16": TimelineType;
      "17": TimelineType;
      "18": TimelineType;
      "19": TimelineType;
      "20": TimelineType;
      "21": TimelineType;
      "22": TimelineType;
      "23": TimelineType;
      "24": TimelineType;
    };
  }>;
};