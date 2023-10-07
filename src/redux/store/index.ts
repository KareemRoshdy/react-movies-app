import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../moviesSlice";

const Store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export default Store;
