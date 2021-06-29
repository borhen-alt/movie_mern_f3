import { GET_MOVIES, FAILED } from "./types";
import axios from "axios";

export const getMovies = () => async (dispatch) => {
    try {
        const result = await axios.get("/movies/all");
        console.log(result.data.movies);
        dispatch({ type: GET_MOVIES, payload: result.data.movies });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAILED, payload: error });
    }
};
export const addMovie = (newMovie) => async (dispatch) => {
    try {
        const result = await axios.post("/movies/new", newMovie);
        console.log(result);
        dispatch(getMovies());
    } catch (error) {
        console.log(error);
        dispatch({ type: FAILED, payload: error });
    }
};
export const deleteMovie = (id) => async (dispatch) => {
    try {
        const result = await axios.delete(`/movies/${id}`);
        console.log(result);
        dispatch(getMovies());
    } catch (error) {
        console.log(error);
        dispatch({ type: FAILED, payload: error });
    }
};
