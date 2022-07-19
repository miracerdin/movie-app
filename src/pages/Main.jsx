import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import Search from "./Search";
import { useSelector } from "react-redux";
const Main = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const { user } = useSelector((state) => state.auth);
  if (user) {
    <div>Girdin</div>;
  }

  return (
    <div>
      <Search query={query} setData={setData} setQuery={setQuery} />
      <MovieCard data={data} setData={setData} />
    </div>
  );
};

export default Main;
