import "./Card.css"
import { Link, Outlet } from "react-router-dom"
import { BsStarFill } from 'react-icons/bs';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
export default function Card(props) {
    const { movie } = props;
    return (
       
           
                // <Col  xs={12} md={8}>

                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }} className="container_1">

                        <div className="cards">
                            <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                            <div className="cards__overlay">
                                <div className="cards__tille">
                                    {movie ? movie.original_title : ""}
                                </div>
                                <div className="cards__runtime">
                                    {movie ? movie.release_date : ""}
                                </div>
                                <span className="card__rating">
                                    {movie ? movie.vote_average : ""}
                                    <i className="fas fa_star" />
                                    <span>   <BsStarFill />    </span>
                                </span>

                                <div className="card__description">
                                    {movie ? movie.overview.slice(0, 118) + "..." : ""}
                                </div>
                            </div>
                        </div>

                    </Link>

                // </Col>
            
       
    )
}