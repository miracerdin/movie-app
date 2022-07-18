import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import Search from "./Search";
const Main = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // const APP_ID = process.env.REACT_APP_APP_ID;
  // const API_KEY = "fcfe29023a44efe82c4f795ae57be0aa";
  // const url = `https://api.themoviedb.org/3/movie/550?api_key=fcfe29023a44efe82c4f795ae57be0aa`;
  // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  // const search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const searchData = async () => {
  //   const searchdata = await axios.get(search);
  //   console.log(searchdata.data.results);
  //   setData(searchdata.data.results);
  // };
  // const getData = async () => {
  //   const data = await axios.get(url);
  //   console.log(data.data);
  //   setData(data.data.results);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   searchData();
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Search query={query} setData={setData} setQuery={setQuery} />
      <MovieCard data={data} setData={setData} />
    </div>
  );
};

export default Main;
