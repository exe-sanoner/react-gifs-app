import {useContext} from 'react';
import GifsContextProvider from '../context/GifsContext'

export default function useGlobalGifs () {
    const {gifs} = useContext(GifsContextProvider);
    return gifs
}