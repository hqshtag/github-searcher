import React, { SyntheticEvent } from "react";
import { SearchTypes } from "../../features/search/types";

interface SelectProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ handleChange }) => {

  return (
    <>
      <select onChange={handleChange}>
        {Object.values(SearchTypes).map((e, i) => (
          <option key={i} value={e}>{e}</option>
        ))}
      </select>{" "}
    </>
  );
};
