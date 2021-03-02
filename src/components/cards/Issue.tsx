import React from 'react'

interface IssueProps {
  id: string
}

export const Issue: React.FC<IssueProps> = ({ id }) => {
  return (<h2>i_{id}</h2>);
}