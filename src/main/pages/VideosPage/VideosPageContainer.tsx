import React from "react";

type Props = {
  Layout: any;
};
export type OutgoingProps = {
  data: any;
};
const VideosPageContainer = (props: Props) => {
  const OutgoingProps: OutgoingProps = {
    data: [],
  };
  return <props.Layout {...OutgoingProps} />;
};

export default React.memo(VideosPageContainer);
