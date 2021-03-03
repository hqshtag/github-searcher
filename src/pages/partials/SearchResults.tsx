import React from "react";
import { useSelector } from "react-redux";
import { isGithubUser, isGithubIssue, isGithubRepository } from "../../api/GithubTypes";
import { Issue } from "../../components/cards/Issue";
import { Repository } from "../../components/cards/Repository";
import { User } from "../../components/cards/User";
import { RootState } from "../../features/rootReducer";
import { InfiniteResult } from "./InfiniteResult";

interface SearchResultsProps {
  loadNext: () => any
}
export const SearchResults: React.FC<SearchResultsProps> = ({ loadNext }) => {
  const results = useSelector((state: RootState) => state.search.result);
  const hasMore = useSelector((state: RootState) => state.search.result.hasMore);

  const items = results.data?.map((e, i) => {
    if (isGithubUser(e)) {
      return <User user={e} key={i} />
    } else if (isGithubRepository(e)) {
      return <Repository repository={e} key={i} />
    } else if (isGithubIssue(e)) {
      return <Issue issue={e} key={i} />
    }
  });

  let count = items?.length || 0;

  return (
    <div className="results infinite-scroll">
      {items && <InfiniteResult items={items} count={count} hasMore={hasMore} loadNext={loadNext} />}
    </div>
  );
};
