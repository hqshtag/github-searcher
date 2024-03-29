import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

interface InfiniteResultProps {
  items: (JSX.Element | undefined)[] | undefined;
  count: number;
  hasMore: boolean;
  loadNext: () => any;
}

export const InfiniteResult: React.FC<InfiniteResultProps> = ({
  items,
  count,
  hasMore,
  loadNext,
}) => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <InfiniteScroll
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      dataLength={count} //This is important field to render the next data
      next={loadNext}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      // below props only if you need pull down functionality
      refreshFunction={refreshPage}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
    >
      {items}
    </InfiniteScroll>
  );
};
