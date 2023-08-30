import axios from "axios";
// console.log(process.env.VITE_REACT_MOVIE_API_KEY);

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`;
export const fetchMovies = async (movieName) => {
  return axios.get(`${API_ENDPOINT}&s=${movieName}`);
};
export const fetchMovie = async (movieId) => {
  return axios.get(`${API_ENDPOINT}&i=${movieId}`);
};
