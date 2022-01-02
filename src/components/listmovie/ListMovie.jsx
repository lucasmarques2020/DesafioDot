import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from '../cards/Cards'
import axios from 'axios'
import React, { useState, useEffect } from "react";

export default function ListMovie() {
    const key = '2f6095647d6d9f31c4eab5cc0ad908b6'
    const api = axios.create({
        baseURL: 'https://api.themoviedb.org/3'
    })
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(async() => {
        const [popularData] = await Promise.all([
            api.get('/movie/popular', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            }),
        ])
        const popularList = ( popularData.data.results)
        setPopularMovies(popularList)
        console.log(popularMovies)
    })
    return (
        <>
            {popularMovies.map(p => (<Cards title={p.title} image={p.poster_path} />))
            }

        </>
    )
}

