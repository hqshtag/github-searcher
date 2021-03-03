import React from "react";

interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <input
      className="keyword-input"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
