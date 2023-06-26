import { useState } from "react";
import { cn } from "../../../scripts/cn";
import { VscGitPullRequest, VscIssues } from "react-icons/vsc";


export default function PullRequestDescription({
  description,
  author
}) {

  // for storing user-details seperately from pr data
  const [authorData, setAuthorData] = useState(null);

  useState(() => {
    // updating username details only if username as a string has something
    if (author.username) {
      setAuthorData({
        username: author.username,
        avatar: `https://github.com/${author.username}.png`
      })
    }
  }, []);

  return (
    <div className={cn("pr-description-container border border-slate-300 rounded-md overflow-hidden")}>
      <div className={cn("pr-description-container__header-layer relative bg-slate-100 border-b border-b-slate-300 py-2 px-3")}>
        <div className={cn("pr-description-container__header-layer__author-username-commented-timestamp-labeler-wrapper flex flex-row items-center justify-start gap-1")}>
          <a className={cn("pr-description-container__author-username font-medium text-sm text-slate-900 hover:underline")} href={`https://github.com/${author.username}`} target={"_blank"}>
            {author.username||"anonymous"}
          </a>
          <span className={cn("initial-commented-timestamp-labeler text-sm font-normal text-slate-500")}>
            {"commented on " + author?.timestamp?.date + " " + author?.timestamp?.month + ((author?.timestamp?.month && author?.timestamp?.year) && ", ") + author?.timestamp?.year}
          </span>
        </div>
      </div>
      <div className={cn("pr-description-container__description-actions-container p-3")}>
        <div className={cn("pr-description-container__description-body-container")}>
          {/* rendering no-description-added labeler to handle empty description state */}
          {!description && <div className={cn("no-description-found-labeler")}>
              <span className={cn("no-description-found-text text-slate-500 text-sm font-normal italic select-none")}>
                {"No description added."}
              </span>
              <span className={cn("no-description-found-sr-text sr-only")}>No description added to this PR</span>
            </div>}
          {/* rendering this block if and only-if the description content is available */}
          {description && <div className={cn("description-body-content")}>
            {typeof description === "string" && <div className={cn("description-content-wrapper")}>
                <span className={cn("description-content-text")}>{description}</span>
                <span className={cn("description-content-sr-text sr-only")}>{description}</span>
              </div>}
            </div>}
            {typeof description === "object" && <div className={cn("description-content-wrapper")}>
                {description?.map((descriptionElement, descriptionElementIndex) => {
                  switch (descriptionElement?.type) {
                    case "heading":
                      if (descriptionElement?.variant === "h2") return <h2 className={cn("text-2xl font-semibold mb-2")} key={descriptionElementIndex}>{descriptionElement?.content}</h2>
                      if (descriptionElement?.variant === "h3") return <h3 className={cn("text-xl font-semibold mb-2")} key={descriptionElementIndex}>{descriptionElement?.content}</h3>
                      break;
                    case "text":
                      if (descriptionElement?.tag === "issue-tag") return <div className={cn("issue-tag-content-wrapper text-sm flex flex-row items-center justify-start gap-1 my-1")}>
                        <VscIssues />
                        <p className={cn("issue-tag-text text-blue-500 font-normal cursor-pointer hover:underline")}>{descriptionElement?.content}</p>
                      </div>
                      if (descriptionElement?.tag === "pr-tag") return <div className={cn("pr-tag-content-wrapper text-sm flex flex-row items-center justify-start gap-1 my-1")}>
                        <VscGitPullRequest />
                        <p className={cn("pr-tag-text text-blue-500 font-normal cursor-pointer hover:underline")}>{descriptionElement?.content}</p>
                      </div>
                      return <p className={cn("text-base font-normal my-2")}>{descriptionElement?.content}</p>
                      break;
                  }
                })}
              </div>}
        </div>
      </div>
    </div>
  )
}