import React, { useState, useEffect } from 'react'
import { Container, Card, CardBody, CardTitle } from 'reactstrap'
import PeopleImg from '../PeopleImg/PeopleImg'
import FilmsImg from '../FilmsImg/FilmsImg'
import { Link } from 'react-router-dom'
import '../ListFilms/ListFilms.css'
import axios from 'axios'

export default function ListFilms({ film, isfilm, listaxPersonaje }) {
    console.log('Recibo de lista desde peopledetails', listaxPersonaje)

    function RenderFilmsbyName() {
        return (
            <>
                {film ? (
                    film.map((item) => (
                        <div
                            className="col-6 col-sm-6 col-md-4 col-lg-3 p-2"
                            key={item.title}
                        >
                            <Card className="cardlisted">
                                <Link
                                    to={`/films/${item.title}`}
                                    state={{ from: item }}
                                >
                                    <PeopleImg title={item.title} />
                                </Link>
                                <CardBody>
                                    <CardTitle tag="h5">{item.title}</CardTitle>
                                    <Link
                                        className="fs-6"
                                        to={`/film/${item.title}`}
                                        state={{ from: item }}
                                    >
                                        Ver Detalles
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className="badge er bg-er text-dark mt-4">
                        <h5 className="p-4">
                            <i className="bi bi-exclamation-triangle"></i> No
                            hay peliculas que mostrar actualmente
                        </h5>
                    </div>
                )}
            </>
        )
    }

    function RenderFilmsbyIdFromPeopleDetails() {
        function Renderizaritem({ item }) {
            const initialFilmDetailsState = {
                title: '',
                episode_id: '',
                opening_crawl: '',
                director: '',
                producer: '',
                release_date: '',
                characters: [],
                planets: [],
                starships: [],
                vehicles: [],
                species: [],
                created: '',
                edited: '',
                url: '',
            }
            const [filmbyPeople, setFilmbyPeople] = useState(
                initialFilmDetailsState
            )

            useEffect(() => {
                const renderizaritem = async () => {
                    const result = await axios(item).then((res) => res.data)
                    //console.log('que tiene result de fetchadata', result)
                    if (result) {
                        setFilmbyPeople(result)
                    } else {
                        setFilmbyPeople(initialFilmDetailsState)
                    }
                }

                renderizaritem()
            }, [])

            return (
                <>
                    <Card className="cardlisted">
                        <Link
                            to={`/films/${filmbyPeople.title}`}
                            state={{ from: filmbyPeople }}
                        >
                            <FilmsImg title={filmbyPeople.title} />
                        </Link>
                        <CardBody>
                            <CardTitle tag="h5">{filmbyPeople.title}</CardTitle>
                            <Link
                                className="fs-6"
                                to={`/films/${filmbyPeople.title}`}
                                state={{ from: filmbyPeople }}
                            >
                                Ver Detalles
                            </Link>
                        </CardBody>
                    </Card>
                </>
            )
        }

        return (
            <>
                {listaxPersonaje ? (
                    listaxPersonaje.map((item, idx) => (
                        <div
                            className="col-6 col-sm-6 col-md-4 col-lg-3 p-2"
                            key={idx}
                        >
                            <Renderizaritem item={item} />
                        </div>
                    ))
                ) : (
                    <div className="badge er bg-er text-dark mt-4">
                        <h5 className="p-4">
                            <i className="bi bi-exclamation-triangle"></i> No
                            hay peliculas que mostrar actualmente
                        </h5>
                    </div>
                )}
            </>
        )
    }

    return (
        <Container className="listoFilms">
            <ul className="row p-0 justify-content-center m-0">
                {listaxPersonaje ? (
                    <RenderFilmsbyIdFromPeopleDetails />
                ) : (
                    <RenderFilmsbyName />
                )}
            </ul>
        </Container>
    )
}
