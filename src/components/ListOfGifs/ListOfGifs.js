import React from 'react'
import Gif from '../Gif/index'
import './ListOfGifs.css'

export default function ListOfGifs ({ gifs }) {
    // console.log(gifs);

    return <div className='ListOfGifs'>        { /* Podria usar ReactFragment tambien en vez del div */ } 
        {
            gifs.map(({id, title, url}) => 
                <Gif 
                    id={id} 
                    key={id}
                    title={title} 
                    url={url} 
                />
            )
        }
    </div>
}