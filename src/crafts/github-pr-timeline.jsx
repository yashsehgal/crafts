
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

import { useState, useEffect } from 'react';
import GitHubAPIResponse from '../lib/github-pr-timeline-data.json';
import PullRequestDescription from './components/github-timeline/pr-description';
import TimelineEntity from './components/timeline-entity';

export default function GitHubPRTimeline() {
  // creating a state and manager for handle the data from GitHub API response
  const [pullRequestTimelineData, setPullRequestTimelineData] = useState(GitHubAPIResponse);

  useEffect(() => console.info("GitHub-Pull-Request", GitHubAPIResponse), []);

  return (
    <div className="github-pr-timeline-component-container">
      {/* <h1 className="leading-snug tracking-tighter text-3xl font-medium">{"GitHub like PR Timeline"}</h1> */}
      {/* adding extra spacing */}
      <div className="my-12" />
      <div className="github-pr-timeline-component w-[720px]">
        {/* Rendering the PR description block as the first element */}
        <PullRequestDescription 
          description={pullRequestTimelineData?.data?.pullRequestInit?.description}
          author={pullRequestTimelineData?.data?.pullRequestInit?.author}
        />
        {/* rendering the timeline component */}
        <TimelineEntity data={pullRequestTimelineData?.data?.timelineData} />
      </div>
    </div>
  )
}