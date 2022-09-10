export type Videos=Video[];
export type Video=  {
    _id: string,
    title: string,
    description:string
    creator: string
  }
  export type HomePageStoreType={
    data:Videos
  }