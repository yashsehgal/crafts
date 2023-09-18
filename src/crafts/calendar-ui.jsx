import React, { useEffect, useState } from "react"
import { cn } from "../scripts/cn";
import { motion } from "framer-motion";
import '@radix-ui/themes/styles.css';
import { Popover, Theme } from "@radix-ui/themes";

const WeekDays = {
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat",
  7: "sun"
}

/**
 * ? Inside { data → timeline → [TIME_SLOT] → time } 
 * ? → both "start" and "end" have time according to 0 to 24 Units format
 */
const CalendarInformation = {
  authorInfo: {
    name: "Yash",
    mail: "yashsehgal.work@gmail.com"
  },
  data: [
    // Timeline for Monday
    {
      day: "monday",
      shortName: "mon",
      timeline: {
        "11": [
          {
            title: "Peter is spiderman case meeting",
            description: "Helping Peter win his case",
            attachments: [],
            time: {
              start: 11,
              end: 14
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Maybe",
              },
              {
                name: "Matt",
                mail: "daredevil@marvel.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ]
      }
    },
    // Timeline for Tuesday
    {
      day: "tuesday",
      shortName: "tue",
      timeline: {}
    },
    // Timeline for Wednesday
    {
      day: "wednesday",
      shortName: "wed",
      timeline: {
        "12": [
          {
            title: "Flight to BLR",
            description: "Commuting Flight to BLR",
            attachments: [],
            time: {
              start: 12,
              end: 4
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Yes",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ]
      }
    },
    // Timeline for Thursday
    {
      day: "thursday",
      shortName: "thu",
      timeline: {
        "8": [
          {
            title: "Meeting with Team",
            description: "",
            attachments: [],
            time: {
              start: 8,
              end: 9
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Yes",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ],
        "11": [
          {
            title: "Meeting with Team",
            description: "",
            attachments: [],
            time: {
              start: 11,
              end: 14
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Yes",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ]
      }
    },
    // Timeline for Friday
    {
      day: "friday",
      shortName: "fri",
      timeline: {
        "8": [
          {
            title: "Meeting with Team",
            description: "",
            attachments: [],
            time: {
              start: 8,
              end: 9
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Yes",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ],
        "11": [
          {
            title: "Meeting with Team",
            description: "",
            attachments: [],
            time: {
              start: 11,
              end: 14
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Yes",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ]
      }
    },
    // Timeline for Saturday
    {
      day: "saturday",
      shortName: "sat",
      timeline: {
        "5": [
          {
            title: "Meeting with Team",
            description: "",
            attachments: [],
            time: {
              start: 5,
              end: 8
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Maybe",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ]
      }
    },
    // Timeline for Sunday
    {
      day: "sunday",
      shortName: "sun",
      timeline: {
        "8": [
          {
            title: "Meeting with Team",
            description: "",
            attachments: [],
            time: {
              start: 8,
              end: 9
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Yes",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ],
        "11": [
          {
            title: "Meeting withTeam",
            description: "",
            attachments: [],
            time: {
              start: 11,
              end: 14
            },
            members: [
              {
                name: "Yash",
                mail: "yashsehgal.work@gmail.com",
                isManager: true,
                rsvpStatus: "Yes",
              },
              {
                name: "Tony",
                mail: "tonystark@avengers.com",
                isManager: true,
                rsvpStatus: "Yes"
              },
              {
                name: "Peter",
                mail: "peterparker@avengers.com",
                isManager: false,
                rsvpStatus: "Yes"
              },
              {
                name: "Bruce",
                mail: "brucebanner@avengers.com",
                isManager: false,
                rsvpStatus: "Maybe"
              },
              {
                name: "Nick",
                mail: "nickfury@avengers.com",
                isManager: true,
                rsvpStatus: "No",
                statusMessage: "Out of Planet"
              }
            ]
          }
        ]
      }
    }
  ]
}

export default function CalendarUI() {
  const [calendarData, setCalendarData] = useState(CalendarInformation);
  return (
    <Theme>
      <div className="calendar-ui-component-container grid grid-cols-1 gap-6">
        <CalendarUIHeader {...calendarData.authorInfo} />
        <CalendarBox data={calendarData.data} />
      </div>
    </Theme>
  )
}

function CalendarUIHeader({ name="Your", mail }) {
  return (
    <header className="flex flex-row items-center justify-between">
      <div>
        <h1 className="author-name-calendar-title leading-snug tracking-tight font-medium text-2xl" 
        title={(name === "Your" ? name : ( name + "\'s")) + " Calendar"}>
          {(name === "Your" ? name : ( name + "\'s")) + " Calendar"}
        </h1>
        <p
          className={cn("text-neutral-500 text-sm")}
        >
          {"Hope you\'re having a good day 🌱"}
        </p>
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <button className="px-4 py-2 rounded-full text-sm border border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-800 active:bg-neutral-700 focus:bg-neutral-900/90 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2">
          Add new task
        </button>
        <button className="px-4 py-2 rounded-full text-sm border border-neutral-200 bg-neutral-neutral-50 text-neutral-900 hover:bg-neutral-100/60 active:bg-neutral-100 focus:bg-neutral-100/90 focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2">
          Share Calendar
        </button>
      </div>
    </header>
  )
}

function CalendarBox({data}) {
  return (
    <div className="grid h-[80vh] relative">
      {/* <CalendarDaySlotsLabelContainer /> */}
      <div className="flex flex-row items-start justify-start w-fit gap-4 py-6 overflow-y-scroll">
        <CalendarTimeSlotsLabelContainer />
        <section className={cn("w-[80vw] border-l border-r border-b border-neutral-200/60 grid grid-cols-7 items-stretch justify-between bg-neutral-50")}>
          {data.map((day, index) => {
            return (
              <CalendarDay dayData={day} key={index} />
            )
          })}
        </section>
        </div>
      </div>
  )
}

function CalendarDaySlotsLabelContainer() {
  // Creating a list of 7 slots with empty data for slots rendering for days in a week
  const weekSlots = Array.from({ length: 7 }, (_, index) => index);
  return (
    <section className="calendar-dayslot-container h-16 w-full grid grid-cols-7 absolute ml-6 py-6">
      {weekSlots.map((weekDay, weekDayIndex) => {
        return (
          <div classaName={cn("week-day-slot", WeekDays[weekDayIndex + 1] === "mon" && "ml-24")} key={weekDayIndex}>
            <h3 className="leading-snug tracking-tighter font-normal text-neutral-400 text-xl">
              {WeekDays[weekDayIndex + 1]}
            </h3>
          </div>
        )
      })}
    </section>
  )
}

function CalendarTimeSlotsLabelContainer() {
  // Creating a list of 24 slots with empty data for slots rendering for hours in a day
  const daySlots = Array.from({ length: 24 }, (_, index) => index);
  return (
    <section className={cn("calendar-timeslot-container border-neutral-200/60 grid grid-cols-1 px-2")}>
      {daySlots.map((daySlot, daySlotIndex) =>
        <div key={daySlotIndex} className="h-12 relative">
          <p className={cn("text-[10px] font-normal text-neutral-400 absolute -top-1.5 -left-2 select-none")}>
            {(daySlot === 24) ? "" : (
              daySlot < 10 ? `0${daySlot}:00` : `${daySlot}:00`
            )}
          </p>
      </div>)}
    </section>
  )
}

function CalendarDay({ dayData }) {
  
  // Creating a list of 24 slots with empty data for slots rendering
  const daySlots = Array.from({ length: 24 }, (_, index) => index);
  
  return (
    <div className={cn("calendar-day-container w-full border-neutral-200/60 grid grid-cols-1",
      (dayData.day === "tuesday" ? "border-l border-r" : "border-r"),
      (dayData.day === "monday" || dayData.day === "sunday") && "border-transparent"
    )}>
      {daySlots.map((daySlot, daySlotIndex) => {
        if (dayData.timeline[daySlotIndex.toString()]) {
          return (
            <CalendarSlot key={daySlotIndex} hasSlotBlocked={true} slotData={dayData.timeline[daySlotIndex.toString()]} />
          )
        } else {
          return (
            <CalendarSlot key={daySlotIndex} />
          )
        }
      })}
    </div>
  )
}

function CalendarSlot({ time, hasSlotBlocked = false, slotData = {} }) {
  console.log("slot data", slotData);
  return (
    <div className={cn("calendar-slot-unbooked w-full h-12 border-t border-neutral-200/60 relative")}>
      {hasSlotBlocked && <CalendarBlockedSlot blockedSlotData={slotData} />}
    </div>
  )
}

function CalendarBlockedSlot({ blockedSlotData }) {
  console.log(blockedSlotData)
  return (
    <Popover.Root className="relative h-fit">
      <Popover.Trigger className="">
        <motion.button
          className={cn("calendar-blocked-slot w-full absolute rounded bg-white border border-neutral-200 shadow-md shadow-neutral-100 hover:shadow-lg p-1 top-0 left-0 z-30")}
          style={{
            height: `${3 * Math.abs(blockedSlotData[0].time.start - blockedSlotData[0].time.end)}rem`
          }}
        >
          <div className="w-full h-full">
            <p className={cn("text-neutral-600 text-sm font-medium truncate text-left")}>
              {blockedSlotData[0].title}
            </p>
          </div>
        </motion.button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360, height: 460, position: "absolute", top: "-10rem", left: "10rem" }}>
        <h1 className="leading-snug tracking-tighter font-medium text-xl">
          {blockedSlotData[0].title}
        </h1>
        <div className="my-4">
          <p className="text-sm select-none font-medium">{"Description"}</p>
          <p className="text-sm text-neutral-600">
            {blockedSlotData[0].description}
          </p>
        </div>
        <div className="my-4">
          <p className="text-sm select-none font-medium">{"Members"}</p>
          <div className="members-list-container mt-2">
            <ul className="members-list">
              {blockedSlotData[0].members.map((member, memberIndex) => (
                <li className="member-item__data py-2 flex flex-row items-start justify-between" key={memberIndex}>
                  <div>
                    <p className="leading-tight">{member.name}</p>
                    <p className="text-sm text-neutral-500 hover:underline cursor-pointer">{member.mail}</p>
                    {member.statusMessage && <p className="text-xs">{"Status: " + member.statusMessage}</p>}
                  </div>
                  <div className={cn("member-meeting-rsvp-status-wrapper text-xs font-normal text-white px-2 py-1 rounded-full w-fit h-fit",
                    (member.rsvpStatus === "Yes" ? "bg-green-600" : (member.rsvpStatus === "Maybe" ? "bg-yellow-600" : "bg-red-500"))
                  )}>
                    {member.rsvpStatus}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}