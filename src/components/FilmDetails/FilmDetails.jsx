import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import PeopleImg from '../PeopleImg/PeopleImg'
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

export default function FilmDetails() {
    const { state } = useLocation()
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
                            <PeopleImg title={state.from.title} />
                            <h2>{state.from.title}</h2>
                        </Col>
                        <Col className="">
                            <h3>Caracteristicas:</h3>
                            <Table className="text-white" borderless>
                                <tbody>
                                    <tr>
                                        <th scope="row">Episodio</th>
                                        <td>{state.from.episode_id}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Director</th>
                                        <td>{state.from.director}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Productor</th>
                                        <td>{state.from.producer}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Fecha de Estreno</th>
                                        <td>{state.from.release_date}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    )
}
