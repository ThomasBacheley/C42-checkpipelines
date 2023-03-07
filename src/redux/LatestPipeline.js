import { configureStore, createSlice } from "@reduxjs/toolkit";

const LatestPipelineSlice = createSlice({
  name: "latestpipeline",
  initialState: {pipeline:null},
  reducers: {
    add: (state, action) => {
      state.pipeline = action.payload.latestpipeline;
    },
  },
});

export const { add } = LatestPipelineSlice.actions;

const LatestPipelineStore = configureStore({
  reducer: {
    latestpipeline: LatestPipelineSlice.reducer,
  },
});

export default LatestPipelineStore;
