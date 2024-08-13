import jobSlice from "./jobSlice";
import userSlice from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
export default store;
