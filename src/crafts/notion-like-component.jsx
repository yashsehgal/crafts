
export default function NotionLikeComponent() {
  return (
    <div
      className={"notion-like-component "
        + "py-3 px-4 rounded-lg bg-white w-[420px] h-fit min-h-[240px] "
        + "shadow-xl shadow-neutral-200"
      }
    >
      <div
        className="filename-content-wrapper px-1 py-0.5 flex flex-row items-center justify-start gap-1"
      >
        <h2
          className="filename-content__owner-username font-medium text-lg"
        >
          {"yashsehgal"}
        </h2>
        <span className="filename-content__slashSeparator text-neutral-400">
          {"/"}
        </span>
        <h2
          className={"filename-content__filename" 
            + "font-medium text-lg border border-transparent px-0.5 rounded-md "
            + "focus:outline-neutral-400 focus:shadow-md "
            + "hover:border-neutral-200 "
          }
          contentEditable
        >
          {"Personal To-do"}
        </h2>
      </div>
      <div className="heading-content-wrapper py-4">
        <h1 className={"heading-content "
          + "font-medium text-xl border border-transparent px-1 py-0.5 rounded-md "
          + "focus:outline-neutral-400 focus:shadow-md "
          + "hover:border-neutral-200 "
        }
          contentEditable
        >
          {"Weekly standup"}
        </h1>
      </div>
      <div className="paragrah-content-wrapper -mt-2">
        <p className={"heading-content "
          + "font-normal text-neutral-500 text-base border border-transparent px-1 py-0.5 rounded-md "
          + "focus:outline-neutral-400 focus:shadow-md "
          + "hover:border-neutral-200 "}
          contentEditable
        >
          {"What to share?"}
        </p>
      </div>
    </div>
  )
}