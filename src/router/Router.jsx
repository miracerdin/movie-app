import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Header from "./components/header/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "../router/PrivateRouter";
import Register from "../pages/Register";
import MovieCard from "../components/MovieCard";
import Search from "../pages/Search";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="movicard" element={<MovieCard />} />
          <Route path="/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />} />
          </Route>
          <Route path="/search" element={<PrivateRouter />}>
            <Route path="" element={<Search />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
