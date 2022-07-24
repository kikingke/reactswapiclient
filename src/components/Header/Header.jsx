import React, { useEffect, useState, useContext } from 'react'
import Search from '../Search/Search'
import { Navbar } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/stoy.png'
import '../Header/Header.css'
import { SwitchContext } from '../../context/SwitchContext'

export default function Header({ handleSearch, people, handleF, isfilm }) {
    const [checkvalue, setCheckValue] = useState(false)

    const temp = useContext(SwitchContext)

    function handleSwitch(e) {
        let el = e.target.checked
        temp.setStatus(el)
        handleF(el)
        setCheckValue(el)
    }

    useEffect(() => {
        if (checkvalue === undefined) {
            handleF(false)
            temp.setStatus(false)
        } else {
            handleF(checkvalue)
            temp.setStatus(checkvalue)
        }
    }, [])

    return (
        <>
            <Navbar className="sticky-top " color="dark" dark>
                <div className="topm">
                    <Link to="/" className="d-flex linktitulo">
                        <img
                            alt="logo"
                            src={logo}
                            style={{
                                height: 40,
                                width: 40,
                            }}
                        />
                        {
                            <h3 className="ms-2 tituloheader">
                                {temp.status
                                    ? 'Lista de Peliculas'
                                    : 'Lista de Personajes'}
                            </h3>
                        }
                    </Link>

                    <Search
                        handleSearch={handleSearch}
                        people={people}
                        isfilm={isfilm}
                    />
                    <div className="linkderecha">
                        <div className="tooglecontainer">
                            <label
                                htmlFor="invalid"
                                title="Change to true"
                                className="css-1utwwx4"
                            >
                                <input
                                    id="control-invalid"
                                    type="checkbox"
                                    name="invalid"
                                    onChange={handleSwitch}
                                />
                                <span>Personajes</span>
                                <span>Peliculas</span>
                            </label>
                        </div>
                        <Link to="/info" className="btnInfo">
                            <i className="fa-solid fa-circle-info"></i>
                        </Link>
                    </div>
                </div>
            </Navbar>
        </>
    )
}
