import React from "react";
type props = {
  Layout: any;
};
type OutgoingProps = {};

const TrendingPageContainer = (props: props) => {
  const OutgoingProps: OutgoingProps = {
    data: [],
  };
  return <props.Layout {...OutgoingProps} />;
};
export default React.memo(TrendingPageContainer);
