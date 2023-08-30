import React from "react";
import { Card, CardMedia, Typography, Grid, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={3}
            textAlign="center"
          >
            {moviesList?.Search?.map((movie, index) => (
              <Grid key={index} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={movie?.Poster}
                      alt={movie?.Title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        {movie.Title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        ({movie.Year})
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviesList;
