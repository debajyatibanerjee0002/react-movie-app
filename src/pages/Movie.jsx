import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import useStyles from "../styles";
import { getMovie } from "../redux/feature/movieSlice";

const Movie = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    console.log(movie);
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);
  return (
    <section className={classes.section}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <Typography align="left" variant="h3" gutterBottom component="h2">
          {movie.Title}
        </Typography>
        <Typography align="left" variant="h6" gutterBottom component="h6">
          GENRE: {movie.Genre}
        </Typography>
        <Typography align="left" variant="h5" gutterBottom component="h5">
          YEAR: {movie.Year}
        </Typography>
        <Typography align="left" variant="body1" gutterBottom component="p">
          {movie.Plot}
        </Typography>
        <Typography align="left" variant="h6" gutterBottom component="h6">
          DIRECTOR: {movie.Director}
        </Typography>
        <Typography align="left" variant="h6" gutterBottom component="h6">
          ACTORS: {movie.Actors}
        </Typography>
        <Link to="..">
          <Button variant="contained">Go Back</Button>
        </Link>
      </div>
    </section>
  );
};

export default Movie;
