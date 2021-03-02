import React from 'react'
import { GithubRepo } from '../../api/GithubTypes';

interface RepositoryProps {
  repository: GithubRepo;
}

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  return (
    <div className="card repository-card">
      <h2>Name: {repository.name}</h2>
    </div>
  );
}