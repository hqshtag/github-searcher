import React from "react";

interface UserProps {
  id: string;
}

export const User: React.FC<UserProps> = ({ id }) => {
  return <h2>u_{id}</h2>;
};
