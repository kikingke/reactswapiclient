import React, { useState, useEffect, useContext } from 'react'
import defaulty from '../../assets/default.png'
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

export default function FilmsImg({ title }) {
    const [imagefilm, setImageFilm] = useState()
    /*
    title => from ListFilms
    */
    console.log('valor que llevo title=>', title)
    const temp = useContext(SwitchContext)

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
        console.log('valor que llevo title=>', title)
        fetchImageFilm()
    }, [])

    return (
        <>
            {title ? (
                <img alt="Card" src={imagefilm} className="imgpeopledetail" />
            ) : (
                <></>
            )}
        </>
    )
}
