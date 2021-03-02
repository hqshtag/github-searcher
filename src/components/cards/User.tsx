import React from "react";
import { GithubUser } from "../../api/GithubTypes";

interface UserProps {
  user: GithubUser;
}

export const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="card user-card">
      <h1>Username: {user.login}</h1>
    </div>
  );
};
