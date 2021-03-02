import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/reducer";

interface SearchResultsProps { }

export const SearchResults: React.FC<SearchResultsProps> = ({ }) => {
  const results = useSelector((state: RootState) => state.search.result);
  return (
    <div className="results">
      <p>
        fetched <span>{results?.length}  </span>
      </p>
    </div>
  );
};
