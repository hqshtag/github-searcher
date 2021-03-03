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
      dataLength={count} //This is important field to render the next data
      next={loadNext}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <div className="scroll-end">
          <hr />
        <p style={{ textAlign: "center" }}>

            finished loading {count} result{count > 1 && 's'}
          </p>
        </div>
      }
      // below props only if you need pull down functionality
      refreshFunction={refreshPage}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
    >
      {items}
    </InfiniteScroll>
  );
};
