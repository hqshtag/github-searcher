import { truncate } from "lodash";
import React from "react";
import { GithubUser } from "../../api/GithubTypes";

interface UserProps {
  user: GithubUser;
}

export const User: React.FC<UserProps> = ({ user }) => {
  const username_max_length: number = "mohamed wajih".length;
  return (
    <div className="card user-card">
      <div className="header">
        <img className="avatar" src={user.avatar_url} alt="user avatar" />
        <h4 className="name">
          {truncate(user.login, { length: username_max_length })}
        </h4>
      </div>
      <div className="details">
        <span><a target="_blanc" href={user.html_url}>Profile</a></span>
        <span><a target="_blanc" href={user.repos_url}>Repositories</a></span>
      </div>

    </div>
  );
};
