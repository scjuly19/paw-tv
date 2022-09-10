import React from "react";
import { useSelector } from "react-redux";
import { getVideosData } from "./duck/selectors/getVideosData";
import { Videos } from "./duck/storeTypes";
type Props = {
  Layout: any;
};
export type OutgoingProps = {
  data: Videos | undefined;
};
function HomePageContainer(props: Props) {
  const videosData = useSelector(getVideosData);
  const outgoingProps: OutgoingProps = {
    data: videosData,
  };
  return <props.Layout {...outgoingProps} />;
}
export default React.memo(HomePageContainer);
