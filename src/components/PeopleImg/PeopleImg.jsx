import React, { useState, useEffect, useContext } from 'react'
import defaulty from '../../assets/default.png'
import axios from 'axios'
import '../PeopleImg/PeopleImg.css'
import { SwitchContext } from '../../context/SwitchContext'

import f1 from '../../assets/f1.jpg'
import f2 from '../../assets/f2.jpg'
import f3 from '../../assets/f3.jpg'
import f4 from '../../assets/f4.jpg'
import f5 from '../../assets/f5.jpg'
import f6 from '../../assets/f6.jpg'

const movieImages = [
    {
        title: 'A New Hope',
        image: f1,
    },
    {
        title: 'The Empire Strikes Back',
        image: f2,
    },
    {
        title: 'Return of the Jedi',
        image: f3,
    },
    {
        title: 'The Phantom Menace',
        image: f4,
    },
    {
        title: 'Attack of the Clones',
        image: f5,
    },
    {
        title: 'Revenge of the Sith',
        image: f6,
    },
]

export default function PeopleImg({ name, isfilm, title, item }) {
    const [imagepeople, setImagepeople] = useState()
    const [imagefilm, setImageFilm] = useState()
    /*
    item => from ListPeople
    title => from ListFilms
    isfilm => from ListFilms
    name=> from PeopleDetails
    */
    const temp = useContext(SwitchContext)

    async function fetchImagePeople() {
        let response = await axios(
            `https://akabab.github.io/starwars-api/api/all.json`
        )
        let chun = await response.data
        const i = chun.filter((m) => m.name === item || m.name === name)
        let result = i.map((a) => a.image)
        if (result) {
            setImagepeople(result)
        } else {
            setImagepeople(defaulty)
        }
    }

    async function fetchImageFilm() {
        const i = movieImages.filter((m) => m.title === title)
        let result = i.map((a) => a.image)
        if (result) {
            setImageFilm(result)
        } else {
            setImageFilm(defaulty)
        }
    }

    useEffect(() => {
        console.log('valor del estado global=>', temp.status)

        if (temp.status === true) {
            console.log('valor que llevo title=>', title)
            fetchImageFilm()
        }
        if (temp.status === false) {
            console.log('valor que llevo title=>', title)
            fetchImagePeople()
        }
    }, [])

    return (
        <>
            {temp.status === true ? (
                <img alt="Card" src={imagefilm} className="imgpeopledetail" />
            ) : (
                <>
                    <img
                        alt="Card"
                        src={imagepeople}
                        className="imgpeopledetail"
                    />
                </>
            )}
        </>
    )
}
