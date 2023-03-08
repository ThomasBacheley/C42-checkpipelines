import { configureStore, createSlice } from "@reduxjs/toolkit";

const DeployementGroupSlice = createSlice({
  name: "deployement",
  initialState: { name: "", deployList: [] },
  reducers: {
    init: (state, action) => {
      state.name = action.payload.name;
    },
    addDeploy: (state, action) => {
      state.deployList.push(action.payload.deploy);
    },
  },
});

export const { init, addDeploy } = DeployementGroupSlice.actions;

const DeployementGroupStore = configureStore({
  reducer: {
    deployement: DeployementGroupSlice.reducer,
  },
});

export default DeployementGroupStore;
