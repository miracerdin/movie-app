import React from "react";
import axios from "axios";
const Search = ({ query, setData, setQuery }) => {
  const API_KEY = "fcfe29023a44efe82c4f795ae57be0aa";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const searchData = async () => {
    const searchdata = await axios.get(url);
    console.log(searchdata.data.results);
    setData(searchdata.data.results);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("user")) {
      searchData();
    } else {
      alert("Please login");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-dark"
          type="text"
          name="movie"
          id="movie"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
