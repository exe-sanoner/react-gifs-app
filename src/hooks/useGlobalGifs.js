import {useContext} from 'react';
import GifsContextProvider from '../context/GifsContext'

// Para usar en cualquier Route
export default function useGlobalGifs () {
    const {gifs} = useContext(GifsContextProvider);
    return gifs
}