import "./Header.css"
import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="header">
            <div className="header_rigth">
                <Link to={"/"} style={{textDecoration: "none"}} className="logo"><SiThemoviedatabase/></Link>
                <Link to={"/movies/popular"} style={{ textDecoration: "none" }} > <span>POPULAR</span> </Link>
                <Link to={"/movies/top_rated"} style={{ textDecoration: "none" }} > <span>TOP RATED</span> </Link>
                <Link to={"/movies/upcoming"} style={{ textDecoration: "none" }} > <span>UP COMING</span> </Link>
            </div>

        </div>
    )
}