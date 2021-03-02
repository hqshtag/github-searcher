import React from "react";
import { useSelector } from "react-redux";
import { isGithubUser, isGithubIssue, isGithubRepository } from "../../api/GithubTypes";
import { Issue } from "../../components/cards/Issue";
import { Repository } from "../../components/cards/Repository";
import { User } from "../../components/cards/User";
import { RootState } from "../../features/rootReducer";
import { SearchTypes } from "../../features/search/types";

interface SearchResultsProps { }

export const SearchResults: React.FC<SearchResultsProps> = ({ }) => {
  const resultsType = useSelector((state: RootState) => state.search.type);
  const results = useSelector((state: RootState) => state.search.result);


  const Result = () => {
    return (
      <div className="results-container">
        {results?.map((e, i) => {
          if (isGithubUser(e)) {
            return <User user={e} key={i} />
          } else if (isGithubRepository(e)) {
            return <Repository repository={e} key={i} />
          } else if (isGithubIssue(e)) {
            return <Issue issue={e} key={i} />
          }
        })}
      </div>
    )
    
  }


  return (
    <div className="results">
      <p>fetched <span>{results?.length} {resultsType}  </span></p>
      <Result />
    </div>
  );
};
