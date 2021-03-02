import React from 'react'
import { GithubIssue } from '../../api/GithubTypes';

interface IssueProps {
  issue: GithubIssue
}

export const Issue: React.FC<IssueProps> = ({ issue }) => {
  return (
    <div className="card issue-card">
      <h2>Issue ID: {issue.id}</h2>
    </div>
  );
}