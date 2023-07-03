import { cn } from "../../../scripts/cn";
import { GoGitCommit } from "react-icons/go";
import { VscGitPullRequest, VscIssues } from "react-icons/vsc";

export default function TimelineEntity({ data }) {
  return (
    <div
      className={cn(
        "timeline-entities-container gap-2 grid pt-8 border-l border-slate-300 pl-4 ml-6 relative"
      )}
    >
      {data?.map((entity, entityIndex) => {
        switch (entity.entityType) {
          case "entity-commit":
            return (
              <div
                className={cn(
                  "timeline-entity entity-commit flex flex-row items-center justify-between"
                )}
                key={entityIndex}
              >
                <div
                  className={cn(
                    "commit-details-wrapper flex flex-row items-center justify-start gap-2 relative"
                  )}
                >
                  <GoGitCommit
                    className={cn(
                      "text-slate-500 absolute -left-6 bg-slate-50"
                    )}
                  />
                  <img
                    src={`https://github.com/${entity?.author}.png`}
                    alt={"author-user-avatar"}
                    className={cn("w-5 h-5 rounded-full")}
                  />
                  <p
                    className={cn(
                      "font-mono font-medium text-xs text-slate-500 cursor-pointer hover:text-blue-500 hover:underline"
                    )}
                  >
                    {entity?.commitMessage}
                  </p>
                </div>
                <span
                  className={cn(
                    "commit-id-wrapper font-medium text-xs font-mono text-slate-500 cursor-pointer hover:text-blue-500 hover:underline"
                  )}
                >
                  {entity.commitID}
                </span>
              </div>
            );
          case "entity-reply":
            return (
              <div
                className={cn("timeline-entity entity-reply mt-6 -ml-10")}
                key={entityIndex}
              >
                <div
                  className={cn(
                    "pr-description-container border border-slate-300 rounded-md"
                  )}
                >
                  <div
                    className={cn(
                      "pr-description-container__header-layer relative bg-slate-100 border-b border-b-slate-300 py-2 px-3 rounded-t-md"
                    )}
                  >
                    <img
                      src={`https://github.com/${entity?.author?.username}.png`}
                      alt="author-user-avatar"
                      className={cn(
                        "user-avatar w-8 h-8 rounded-full absolute top-1 -left-12"
                      )}
                    />
                    <div
                      className={cn(
                        "pr-description-container__header-layer__author-username-commented-timestamp-labeler-wrapper flex flex-row items-center justify-start gap-1"
                      )}
                    >
                      <a
                        className={cn(
                          "pr-description-container__author-username font-medium text-sm text-slate-900 hover:underline"
                        )}
                        href={`https://github.com/${entity?.author?.username}`}
                        target={"_blank"}
                      >
                        {entity?.author.username || "anonymous"}
                      </a>
                      <span
                        className={cn(
                          "initial-commented-timestamp-labeler text-sm font-normal text-slate-500"
                        )}
                      >
                        {"commented on " +
                          entity?.author?.timestamp?.date +
                          " " +
                          entity?.author?.month +
                          (entity?.author?.timestamp?.month &&
                            entity?.author?.timestamp?.year &&
                            ", ") +
                            entity?.author?.timestamp?.year}
                      </span>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "pr-description-container__description-actions-container p-3 bg-slate-50 rounded-b-md"
                    )}
                  >
                    <div
                      className={cn(
                        "pr-description-container__description-body-container"
                      )}
                    >
                      {/* rendering no-description-added labeler to handle empty description state */}
                      {!entity?.description && (
                        <div className={cn("no-description-found-labeler")}>
                          <span
                            className={cn(
                              "no-description-found-text text-slate-500 text-sm font-normal italic select-none"
                            )}
                          >
                            {"No description added."}
                          </span>
                          <span
                            className={cn(
                              "no-description-found-sr-text sr-only"
                            )}
                          >
                            No description added to this PR
                          </span>
                        </div>
                      )}
                      {/* rendering this block if and only-if the description content is available */}
                      {entity?.description && (
                        <div className={cn("description-body-content")}>
                          {typeof description === "string" && (
                            <div className={cn("description-content-wrapper")}>
                              <span className={cn("description-content-text")}>
                                {entity?.description}
                              </span>
                              <span
                                className={cn(
                                  "description-content-sr-text sr-only"
                                )}
                              >
                                {entity?.description}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      {typeof entity?.description === "object" && (
                        <div className={cn("description-content-wrapper")}>
                          {entity?.description?.map(
                            (descriptionElement, descriptionElementIndex) => {
                              switch (descriptionElement?.type) {
                                case "heading":
                                  if (descriptionElement?.variant === "h2")
                                    return (
                                      <h2
                                        className={cn(
                                          "text-2xl font-semibold mb-2"
                                        )}
                                        key={descriptionElementIndex}
                                      >
                                        {descriptionElement?.content}
                                      </h2>
                                    );
                                  if (descriptionElement?.variant === "h3")
                                    return (
                                      <h3
                                        className={cn(
                                          "text-xl font-semibold mb-2"
                                        )}
                                        key={descriptionElementIndex}
                                      >
                                        {descriptionElement?.content}
                                      </h3>
                                    );
                                  return (
                                    <h4
                                      className={cn(
                                        "text-lg font-semibold mb-2"
                                      )}
                                      key={descriptionElementIndex}
                                    >
                                      {descriptionElement?.content}
                                    </h4>
                                  );
                                case "text":
                                  if (descriptionElement?.tag === "issue-tag")
                                    return (
                                      <div
                                        className={cn(
                                          "issue-tag-content-wrapper text-sm flex flex-row items-center justify-start gap-1 my-1"
                                        )}
                                        key={descriptionElementIndex}
                                      >
                                        <VscIssues />
                                        <p
                                          className={cn(
                                            "issue-tag-text text-blue-500 font-normal cursor-pointer hover:underline"
                                          )}
                                          key={descriptionElementIndex}
                                        >
                                          {descriptionElement?.content}
                                        </p>
                                      </div>
                                    );
                                  if (descriptionElement?.tag === "pr-tag")
                                    return (
                                      <div
                                        className={cn(
                                          "pr-tag-content-wrapper text-sm flex flex-row items-center justify-start gap-1 my-1"
                                        )}
                                        key={descriptionElementIndex}
                                      >
                                        <VscGitPullRequest />
                                        <p
                                          className={cn(
                                            "pr-tag-text text-blue-500 font-normal cursor-pointer hover:underline"
                                          )}
                                          key={descriptionElementIndex}
                                        >
                                          {descriptionElement?.content}
                                        </p>
                                      </div>
                                    );
                                  return (
                                    <p
                                      className={cn(
                                        "text-base font-normal my-2"
                                      )}
                                      key={descriptionElementIndex}
                                    >
                                      {descriptionElement?.content}
                                    </p>
                                  );
                              }
                            }
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}
