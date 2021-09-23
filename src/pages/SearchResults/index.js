import React from 'react';
import Spinner from 'components/Spinner/index';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import {useGifs} from 'hooks/useGifs';

export default function SearchResults ({ params }) {
    // console.log(params);
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword });   // custom hook

    return <>
        {loading
            ? <Spinner />
            : <>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
            </>
        } 
    </>
}



