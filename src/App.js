import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState, useContext } from 'react';

import Movie_Detail from './pages/movie_Detail/Movie_Detail';
import Home from './pages/home/Home';
import Header from "./components/header/Header";
import MovieList from './components/movieList/MovieList';

export default function App() {
  return (
    


    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='movies/:type' element={<MovieList />}></Route>
        <Route path='movie/:id' element={<Movie_Detail />}></Route>
      </Routes>
    </div>
  )
}
