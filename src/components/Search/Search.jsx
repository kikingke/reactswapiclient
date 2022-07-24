import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Input } from 'reactstrap'
import '../Search/Search.css'

const initialFormPeople = {
    namec: '',
}
const initialFormFilm = {
    titlec: '',
}

export default function Search({ handleSearch, people, isfilm }) {
    const [form, setForm] = useState(initialFormPeople)
    const [eraseclick, setEraseclick] = useState(true)

    const [formfilm, setFormFilm] = useState(initialFormFilm)
    // const [erasefilmclick, setEraseFilmclick] = useState(true)

    function handleChangePeople(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmitPeople(e) {
        e.preventDefault()
        const val = fetchSearchPeople()
        if (form.namec) {
            handleSearch(val)
            setEraseclick(false)
            setForm(initialFormPeople)
        } else {
            handleSearch(null)
            setForm(initialFormPeople)
            setEraseclick(true)
        }
    }

    async function fetchSearchPeople() {
        let response = await axios(
            `https://swapi.dev/api/people/?search=${form.namec}`
        )
        let chun = await response.data
        return chun.results
    }

    useEffect(() => {})

    /*****/

    function handleChangeFilm(e) {
        setFormFilm({
            ...formfilm,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmitFilm(e) {
        e.preventDefault()
        const val = fetchSearchFilm()
        console.log('que trae films => ', val)
        if (formfilm.titlec) {
            handleSearch(val)
            setEraseclick(false)
            setFormFilm(initialFormFilm)
        } else {
            handleSearch(null)
            setFormFilm(initialFormFilm)
            setEraseclick(true)
        }
    }

    async function fetchSearchFilm() {
        let response = await axios(
            `https://swapi.dev/api/films/?search=${formfilm.titlec}`
        )
        let chun = await response.data
        return chun.results
    }

    return (
        <>
            {!isfilm ? (
                <form onSubmit={handleSubmitPeople}>
                    <div className="d-flex ">
                        <Input
                            className="rounded-0 inputSearch"
                            name="namec"
                            placeholder="Buscar por Personaje"
                            type="text"
                            onChange={handleChangePeople}
                            value={form.namec}
                        />
                        {eraseclick === true ? (
                            <button className="btnSearch" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        ) : (
                            <button className="btnSearchE" type="buttton">
                                <i className="fas fa-backspace"></i>
                            </button>
                        )}
                    </div>
                </form>
            ) : (
                <form onSubmit={handleSubmitFilm}>
                    <div className="d-flex ">
                        <Input
                            className="rounded-0 inputSearch"
                            name="titlec"
                            placeholder="Buscar por Pelicula"
                            type="text"
                            onChange={handleChangeFilm}
                            value={formfilm.titlec}
                        />
                        {eraseclick === true ? (
                            <button className="btnSearch" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        ) : (
                            <button className="btnSearchE" type="buttton">
                                <i className="fas fa-backspace"></i>
                            </button>
                        )}
                    </div>
                </form>
            )}
        </>
    )
}
