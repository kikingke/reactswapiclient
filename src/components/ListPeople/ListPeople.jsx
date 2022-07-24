import React from 'react'
import { Container, Card, CardBody, CardTitle } from 'reactstrap'
import PeopleImg from '../PeopleImg/PeopleImg'
import { Link } from 'react-router-dom'
import '../ListPeople/ListPeople.css'

export default function ListPeople({ people }) {
    return (
        <Container className="listofcharacters">
            <ul className="row p-0 justify-content-center">
                {people ? (
                    people.map((item) => (
                        <div
                            className="col-6 col-sm-6 col-md-4 col-lg-3 p-2"
                            key={item.name}
                        >
                            <Card className="cardlisted">
                                <Link
                                    to={`/character/${item.name}`}
                                    state={{ from: item }}
                                >
                                    <PeopleImg item={item.name} />
                                </Link>
                                <CardBody>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <Link
                                        className="fs-6"
                                        to={`/character/${item.name}`}
                                        state={{ from: item }}
                                    >
                                        Ver Detalles
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className="badge bg-warning text-dark mt-4">
                        <h5 className="p-4">
                            <i className="bi bi-exclamation-triangle"></i> No
                            hay personajes que mostrar actualmente
                        </h5>
                    </div>
                )}
            </ul>
        </Container>
    )
}
