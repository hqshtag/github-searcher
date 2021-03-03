import { truncate } from "lodash";
import React from "react";
import { GithubRepository } from "../../api/GithubTypes";

interface RepositoryProps {
  repository: GithubRepository;
}

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {

  const name_max_length: number = 33;
  const description_max_length: number = 72;

  const createdAt = new Date(repository.created_at);
  const updatedAt = new Date(repository.updated_at);

  return (
    <div className="card repository-card">
      <div className="header">
        <img className="avatar" src={repository.owner.avatar_url} alt="user-avatar" />
        <div>
          <h4 className="name">{truncate(repository.full_name, { length: name_max_length })}</h4>
          <h4 className="stars">{repository.stargazers_count} Star</h4>
        </div>
      </div>
      <div className="details">
        <label htmlFor="description">Description:
        <p className="description">{truncate(repository.description, { length: description_max_length })}</p>

        </label>
        <div className="links">
          <span><a target="_blanc" href={repository.html_url}>Repository</a></span>
          <span><a target="_blanc" href={repository.owner.html_url}>Owner</a></span>
        </div>
        <div className="timestamps">
          <p>created: {createdAt.toDateString()}</p>
          <p>last update: {updatedAt.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};
