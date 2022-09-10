import { CompleteStoreType } from "../../../../reducers/reducerTypes";
import { Videos } from "../storeTypes";
export const getVideosData = (state: CompleteStoreType): Videos => {
  return state.homepage.data;
};
