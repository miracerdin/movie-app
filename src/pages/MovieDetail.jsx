import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DivImg, { Img, DivGen } from "./MovieDetail.styled";
import NotFound from "./NotFound";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  const API_KEY = "fcfe29023a44efe82c4f795ae57be0aa";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const fetchData = () => {
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  if (error) {
    return <NotFound />;
  } else if (!movie) {
    return (
      <div className="text-center">
        <h2>Data is Fetching</h2>
      </div>
    );
  } else {
    return (
      <div className="d-flex">
        <DivImg className="">
          <Img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster_path"
            width="250px"
          />
        </DivImg>
        <DivGen>
          <p>
            <h4 className="text-left">OverWiev </h4>
            {movie.overview}
          </p>
          <p>IMDB:{movie.vote_average}</p>
          <p>Date:{movie.release_date}</p>
          <p>Total vote:{movie.vote_count}</p>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </DivGen>
      </div>
    );
  }
};

export default MovieDetail;
