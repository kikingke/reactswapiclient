import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import { Button } from 'reactstrap'
import ListPeople from './ListPeople/ListPeople'
import ListFilms from './ListFilms/ListFilms'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Main() {
    const [people, setPeople] = useState([])
    const [page, setPage] = useState()

    const [isfilm, setIsFilm] = useState(false)
    const [film, setFilm] = useState([])

    let purl = 'https://swapi.dev/api/people/?page=2'

    async function fetchDataPeople() {
        try {
            let response = await axios(`https://swapi.dev/api/people`)
            let chun = await response.data
            setPeople(chun.results)
            setPage(chun.next)
        } catch (error) {
            setPeople([])
            Swal.fire({
                icon: 'error',
                title: `${error}`,
                text: 'Ha ocurrido un error en la extraccion de Datos {People} de la API!',
                footer: '<a href="https://swapi.dev/documentation">Consultar Documentación?</a>',
            })
        }
    }

    async function fetchDataFilms() {
        try {
            let response = await axios(`https://swapi.dev/api/films`)
            let chun = await response.data
            setFilm(chun.results)
            setPage(chun.next)
        } catch (error) {
            setFilm([])
            Swal.fire({
                icon: 'error',
                title: `${error}`,
                text: 'Ha ocurrido un error en la extraccion de Datos {Films} de la API!',
                footer: '<a href="https://swapi.dev/documentation">Consultar Documentación?</a>',
            })
        }
    }

    async function fetchPage(url) {
        let response = await axios(url)
        let chun = await response.data
        console.log('fetchpage return', chun)
        return chun
    }

    const handleListarPersonajes = async () => {
        console.log('click')
        console.log('page.', page)
        if (page) {
            console.log('page', page)
            const res = await fetchPage(page)
            setPeople([...people, ...res.results])
            setPage(res.next)
        } else {
            const res = await fetchPage(purl)
            setPeople([...people, ...res.results])
            setPage(res.next)
        }
    }

    useEffect(() => {
        console.log('renderizando')
        fetchDataPeople()
        fetchDataFilms()
    }, [])

    function handleSearch(data) {
        if (!isfilm) {
            if (data) {
                data.then((value) => {
                    setPeople(value)
                    setPage(value.next)
                })
            } else {
                fetchDataPeople()
            }
        } else {
            if (data) {
                data.then((value) => {
                    setFilm(value)
                    setPage(value.next)
                })
            } else {
                fetchDataFilms()
            }
        }
    }

    function handleF(data) {
        setIsFilm(data)
    }

    return (
        <>
            <Header
                handleSearch={handleSearch}
                poeple={people}
                handleF={handleF}
                isfilm={isfilm}
            />

            {isfilm === false ? (
                <>
                    <ListPeople people={people} />
                    {people.length >= 10 ? (
                        <div className="btnmascontainer">
                            <Button
                                className="rounded-0"
                                onClick={handleListarPersonajes}
                                color="warning"
                                outline
                            >
                                <svg className="arrows">
                                    <path
                                        className="a1"
                                        d="M0 0 L30 32 L60 0"
                                    ></path>
                                    <path
                                        className="a2"
                                        d="M0 20 L30 52 L60 20"
                                    ></path>
                                    <path
                                        className="a3"
                                        d="M0 40 L30 72 L60 40"
                                    ></path>
                                </svg>
                                Ver Más
                            </Button>
                        </div>
                    ) : (
                        <br />
                    )}
                </>
            ) : (
                <>
                    <ListFilms film={film} isfilm={isfilm} />
                </>
            )}
        </>
    )
}
