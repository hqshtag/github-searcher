import React from 'react'

interface RepoProps {
  id: string
}

export const Repo: React.FC<RepoProps> = ({ id }) => {
  return (<h2>r_{id}</h2>);
}