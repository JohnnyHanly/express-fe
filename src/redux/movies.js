import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  return axios
    .get("http://localhost:3000/movies/page/1")
    .then((res) => res.data);
});

export const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], status: null },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = "loading";
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
      state.status = "success";
    },
    [getMovies.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default movieSlice.reducer;
