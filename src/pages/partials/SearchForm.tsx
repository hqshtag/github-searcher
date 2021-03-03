import React from "react";
import { Input } from "../../components/inputs/Input";
import { Select } from "../../components/inputs/Select";


interface SearchFormProps {
  keyword: string
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SearchForm: React.FC<SearchFormProps> = ({
  keyword,
  handleSelectChange,
  handleTextChange
}) => {

  return (
    <form>
      <Input value={keyword} handleChange={handleTextChange} placeholder="Start typing to search.." />
      <Select handleChange={handleSelectChange} />
    </form>
  );
};
