
// TODO - Create a timeline component, which supports all the actions within a Pull-request.
// ? timeline should support the following activities:
//    TODO - replies / PR description
//        ? - description content
//        ? - author details: author username, author avatar (profile display)
//        ? - PR description date of getting added
//    TODO - commits
//        ? - commit message
//        ? - commit author details: author username, author avatar (profile display)
//        ? - unique commit id
//    TODO - issue mentions
//        ? - issue mentioned in which issue or PR or GitHub Repository
//        ? - author details: author username, author avatar (profile display)


export default function GitHubPRTimeline() {
  return (
    <div className="github-pr-timeline-component-container">
      <h1 className="leading-snug tracking-tighter text-3xl font-medium">{"GitHub like PR Timeline"}</h1>
      <div className="github-pr-timeline-component">

      </div>
    </div>
  )
}