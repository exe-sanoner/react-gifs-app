import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import {useGifs} from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

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
                <button>Buscar</button>
                <input onChange={handleChange} placeholder="Search a gif here..." type="text" value={keyword} />
                {/* <input type="submit" value="Buscar" /> */}
            </form>

            <div className="App-main">
                <div className="App-results">
                <h3 className="App-title">Última búsqueda:</h3>
                <ListOfGifs gifs={gifs} />
            </div>

            <div className="App-category">
                <TrendingSearches />
            </div>
        </div>
        </>
    )   
}