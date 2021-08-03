import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies";
export default configureStore({
  reducer: { movies: movieSlice },
});
