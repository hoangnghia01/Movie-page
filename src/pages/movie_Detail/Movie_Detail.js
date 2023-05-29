import { useEffect, useState } from "react"
import "./Movie_Detail.css"
import axios from 'axios';
import { Link, Outlet, useParams } from "react-router-dom"
import { BsStarFill } from 'react-icons/bs';
export default function Movie_Detail() {
    const apikey = "7e75c1728e2f7864a5ffa1a5df9c9d86"
    // const apikey = "4e44d9029b1270a757cddc766a1bcb63"
    // const {id} = useParams()
    const param = useParams()
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${parseInt(param.id)}?api_key=${apikey}&language=en-US`
        axios
            .get(url)
            .then((res) => {
                setMovie(res.data)
                setGenres(res.data.genres)
            })
            .catch((error) => {

            })
    }
    useEffect(() => {
        getData()

    }, [param])
    console.log(movie)
    
    console.log(genres)


    return (
        <div className="page">
            <div className="backgroud">
                <img src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
            </div>
            <div className="container_info">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                </div>
                <div className="info">
                    <div className="infomovie">
                        <h1>{movie && movie.original_title}</h1>
                        <p>{movie && movie.tagline}</p>
                        <span>{movie && movie.vote_average}</span><span>   <BsStarFill />    </span> <span>({movie && movie.vote_count}) void</span>
                        <p>Runtime: {movie && movie.runtime}</p>
                        <p>Release date: {movie && movie.release_date}</p>
                        <div className="title_names">
                        {genres && genres.map((item, index) => {
                            return (
                                <span className="title_name" key={index}>{item.name}</span>
                            )
                        })}

                        {/* {genres.map(genre => (
                                <span key={genre.id}>{genre.name}</span>
                            ))} */}
                        </div>
                    </div>

                    <div className="overview">
                        <h2>Synopsis</h2>
                        <p>{movie && movie.overview}</p>
                    </div>
                </div>

            </div>

        </div>

    )
}

