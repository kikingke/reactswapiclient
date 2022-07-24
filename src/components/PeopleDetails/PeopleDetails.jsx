import React from 'react'
import PeopleImg from '../PeopleImg/PeopleImg'
import { useLocation, Link } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Table,
} from 'reactstrap'
import '../PeopleDetails/PeopleDetails.css'
import ListFilms from '../ListFilms/ListFilms'

export default function PeopleDetails() {
    const { state } = useLocation()
    console.log('checking state propon Link', state)
    return (
        <Container className="personajedetails d-flex justify-content-center align-items-center">
            <Card className="CardPeopleDetail text-white">
                <CardHeader>
                    <CardTitle>
                        <h2>
                            <Link to="/" className="btnback me-3">
                                <i className="far fa-arrow-alt-circle-left"></i>
                            </Link>
                            Detalles del Personaje
                        </h2>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <Row className="">
                        <Col className=" text-center">
                            <PeopleImg name={state.from.name} />
                            <h2>{state.from.name}</h2>
                        </Col>
                        <Col className="">
                            <h3>Caracteristicas:</h3>
                            <Table className="text-white" borderless>
                                <tbody>
                                    <tr>
                                        <th scope="row">Altura</th>
                                        <td>{state.from.height}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Peso</th>
                                        <td>{state.from.mass}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Color de Ojos</th>
                                        <td>{state.from.eye_color}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Color de Cabello</th>
                                        <td>{state.from.hair_color}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Color de Piel</th>
                                        <td>{state.from.skin_color}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Año de Nacimiento</th>
                                        <td>{state.from.birth_year}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Genero</th>
                                        <td>{state.from.gender}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ultima vez Editado</th>
                                        <td>{state.from.edited}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <hr className="lineyellow" />
                    <Row>
                        <h4>
                            Lista de Peliculas que aparece: {state.from.name}
                        </h4>
                        <ListFilms listaxPersonaje={state.from.films} />
                    </Row>
                </CardBody>
            </Card>
        </Container>
    )
}
