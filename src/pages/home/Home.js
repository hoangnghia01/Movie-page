import { useEffect, useState } from "react"
import "./Home.css"
import axios from 'axios';
import { Link, Outlet, Route } from "react-router-dom"

import MovieList from "../../components/movieList/MovieList";
export default function Home() {
    return (
        <div>
            
            <MovieList />

        </div>

    )
}