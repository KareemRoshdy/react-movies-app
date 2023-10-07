/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_Movies =
  "https://api.themoviedb.org/3/movie/popular?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&page=1";

const initialState = {
  movies: [],
  categories: [],
  isLoading: false,
};

export const getAllMovies: any = createAsyncThunk(
  "movie/getAllMovies",
  async () => {
    try {
      const res = await axios(API_Movies);
      return res.data.results;
    } catch (error) {
      console.log("Error:", error);
    }
  }
);

export const getCategory: any = createAsyncThunk(
  "movie/getCategory",
  async () => {
    try {
      const res = await axios(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&page=1"
      );
      return res.data.genres;
    } catch (error) {
      console.log("Error:", error);
    }
  }
);

export const getMoviesPage: any = createAsyncThunk(
  "movie/getMoviesPage",
  async (pageNumber) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&page=${pageNumber}`
      );
      return res.data.results;
    } catch (error) {
      console.log("Error:", error);
    }
  }
);

export const getMovieSearch: any = createAsyncThunk(
  "movie/getMovieSearch",
  async (word) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&query=${word}&page=1`
      );
      return res.data.results;
    } catch (error) {
      console.log("Error:", error);
    }
  }
);

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /*
     *===========================================>
     *           Start Get all movies
     *===========================================>
     */

    builder.addCase(getAllMovies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      getAllMovies.fulfilled,
      (state, action: PayloadAction<[]>) => {
        state.movies = action.payload;
        state.isLoading = false;
      }
    );

    builder.addCase(getAllMovies.rejected, (state) => {
      state.isLoading = false;
    });

    /*
     *===========================================>
     *           End Get all movies
     *===========================================>
     */

    /*
     *===========================================>
     *           Start Get all categories
     *===========================================>
     */

    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    /*
     *===========================================>
     *           End Get all categories
     *===========================================>
     */

    /*
     *===========================================>
     *           Start Get all MoviesPage
     *===========================================>
     */

    builder.addCase(getMoviesPage.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    /*
     *===========================================>
     *           End Get all MoviesPage
     *===========================================>
     */

    /*
     *===========================================>
     *           Start Get Search
     *===========================================>
     */

    builder.addCase(getMovieSearch.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    /*
     *===========================================>
     *           End Get Search
     *===========================================>
     */
  },
});

export default moviesSlice.reducer;
