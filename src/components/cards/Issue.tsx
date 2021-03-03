import { truncate } from "lodash";
import React from "react";
import { GithubIssue } from "../../api/GithubTypes";

interface IssueProps {
  issue: GithubIssue;
}

export const Issue: React.FC<IssueProps> = ({ issue }) => {
  const title_max_length: number = 12;
  const username_max_length: number = 22;

  const createdAt = new Date(issue.created_at);
  const updatedAt = new Date(issue.updated_at);
  return (
    <div className="card issue-card">
      <div className="header">
        <span className="id">Issue ID: {issue.id}</span>
        <label htmlFor="title">
          {" "}
          Title:
          <h3 className="title">
            {truncate(issue.title, { length: title_max_length })}
          </h3>
        </label>
        <label htmlFor="user">
          Created by:
          
          <h4 className="username">
            <a target="_blanc" href={issue.user.html_url}>
              {truncate(issue.user.login, { length: username_max_length })}
            </a>
          </h4>


        </label>
      </div>
      <div className="details">
        <label htmlFor="comments">
          comments:
          <p className="comments">{issue.comments}</p>

        </label>
        <label htmlFor="state">
          Status:
          <p className="state">{issue.state}</p>
        </label>
      </div>
      <div className="timestamps">
        <p>created: {createdAt.toDateString()}</p>
        <p>last update: {updatedAt.toDateString()}</p>
      </div>
    </div>
  );
};
