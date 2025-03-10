import { combineSlices , configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const rootreducers = combineSlices(
 userSlice,
).withLazyLoadedSlices();

const store = configureStore({
 reducer: rootreducers,
});

export default store;