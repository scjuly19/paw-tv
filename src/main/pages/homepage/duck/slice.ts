import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomePageStoreType, Videos } from "./storeTypes";

const initialState:HomePageStoreType={
    data:[]
};
export type HomePageReducerType={
setVideoDataAction:CaseReducer<HomePageStoreType,PayloadAction<Videos>>
}
const HomePageSlice=createSlice<HomePageStoreType,HomePageReducerType>({
    name:'homepage',
    initialState,
    reducers:{
        setVideoDataAction:(state,{payload})=>{
            state.data=payload
        }
    }
});
export const{
    setVideoDataAction
}=HomePageSlice.actions;
export default HomePageSlice.reducer;