import { useEffect, useState } from "react"
import "./MovieList.css"
import axios from 'axios';
import Card from "../card/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Outlet, useParams } from "react-router-dom"
export default function MovieList() {
    const apikey = "7e75c1728e2f7864a5ffa1a5df9c9d86"
    // const apikey = "4e44d9029b1270a757cddc766a1bcb63"

    // const [data, setData] = useState(null)
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()
    const getData = async () => {

        const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${apikey}&language=en-US`
        axios
            .get(url)
            .then((res) => {
                setMovieList(res.data.results)
            })
            .catch((error) => {

            })
    }
    useEffect(() => {
        getData()

    }, [type])
    console.log(movieList)
    return (

        <nav className="movielist">
            <Container >
                <Row>
                {/* <h1 style={{color: "red"}}>{param.style}</h1> */}
                {movieList && movieList.map((item, index) =>
                (
                    <Col xs={2} sm={3}>
                    <Card key={index} movie={item} />
                    </Col>
                ))}
            </Row>
        </Container>
                </nav >
        
            

    )
}