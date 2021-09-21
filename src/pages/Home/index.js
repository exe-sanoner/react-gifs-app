import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ["Drums", "Messi", "Programacion", "Argentina"];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();  // custom hook

    const handleSubmit = evt => {
        evt.preventDefault();
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        // console.log('🐤',keyword);
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="Search a gif here..." type="text" value={keyword} />
                <input type="submit" value="Buscar" />
            </form>
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
            {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            ))}
            </ul>
        </>
    )   
}