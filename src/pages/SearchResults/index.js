import React from 'react';
import Spinner from '../../components/Spinner/index';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import {useGifs} from '../../hooks/useGifs';

export default function SearchResults ({ params }) {
    // console.log(params);
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword });   // custom hook

    return <>
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        } 
    </>
}



