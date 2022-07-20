import React from "react";
import Div, { DivImg, Img, Parag } from "./MovieCard.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const MovieCard = ({ data, handleSubmit, setData }) => {
  const navigate = useNavigate();
  const API_KEY = "fcfe29023a44efe82c4f795ae57be0aa";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const getData = async () => {
    const data = await axios.get(url);
    console.log(data.data);
    setData(data.data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Div>
      {data?.map((item, index) => {
        const { id, title, poster_path, vote_average } = item;
        return (
          <div
            key={index}
            className="bg-primary cursor-pointer"
            onClick={() => navigate(`${id}`, { state: item, replace: false })}
          >
            <DivImg>
              <div className="image">
                <Img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt="homepage"
                />
              </div>
              <div className="d-flex justify-between overflow-hidden align-middle">
                <h2>{title}</h2>
                {JSON.parse(localStorage.getItem("user")) ? (
                  <span className="bg-danger text-white p-2 max-h-8">
                    {vote_average}
                  </span>
                ) : null}
              </div>
            </DivImg>
            {/* <Parag>{item.overview}</Parag> */}
          </div>
        );
      })}
    </Div>
  );
};

export default MovieCard;
