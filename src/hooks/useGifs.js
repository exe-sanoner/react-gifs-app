import {useState, useEffect, useContext} from 'react';
import getGifs from '../services/getGifs';
import GifsContextProvider from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContextProvider);
    // const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);  
        // recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

        getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setGifs(gifs);                      
            setLoading(false);
            // guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keyword)                                        
        })
    }, [keyword, setGifs]) 

    return {loading, gifs}
}