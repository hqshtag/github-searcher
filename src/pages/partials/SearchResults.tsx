import React from "react";
import { useSelector } from "react-redux";
import { Issue } from "../../components/cards/Issue";
import { RootState } from "../../features/rootReducer";
import { SearchTypes } from "../../features/search/types";

interface SearchResultsProps { }

export const SearchResults: React.FC<SearchResultsProps> = ({ }) => {
  const resultsType = useSelector((state: RootState) => state.search.type);
  const results = useSelector((state: RootState) => state.search.result);



    /*
    results is of type Array<GithubItemsType />, 
    we want to check which type are we talking about
    GithubIssue, GithubRepo or GithubUser and convert it
    */
  


  return (
    <div className="results">
      <p>fetched <span>{results?.length} {resultsType}  </span></p>
    </div>
  );
};
