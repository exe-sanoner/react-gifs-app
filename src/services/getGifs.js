// const GIFS = [
//   'https://64.media.tumblr.com/2fc0f9221fb47fac4f1e8348ff407e20/tumblr_mjxuswu0PF1r9d7o3o2_500.gifv',
//   'https://media4.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47gxfyy7uwp5qewkhoeur8ywx7hixek2l9tm2m47la&rid=giphy.gif&ct=g'
// ]

// const DIFFERENT_GIFS = [
//   'https://media3.giphy.com/media/JfDNFU1qOZna/giphy.webp?cid=ecf05e477hhvja312zbaxninmi30q4tuzuq4gzrr3wd0dmyh&rid=giphy.webp&ct=g'
// ]

// const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=ZshOPREWsOiTKqHDFKv9EbS6FTBajHt3&q=dog&limit=10&offset=0&rating=g&lang=en'


// const apiKey = 'ZshOPREWsOiTKqHDFKv9EbS6FTBajHt3'

// export default function getGifs({keyword = 'homero'} = {}) {
//     const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

//     return fetch(apiURL)
//         .then(res => res.json())
//         .then(response => {
//             const {data} = response
//             const gifs = data.map(image => {
//                 const {images, title, id} = image
//                 const {url} = image.images.downsized_medium
//                 return {title, id, url}
//             })
//             // console.log('🐤',gifs);
//         return gifs
//     })
// }


import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const {images, title, id} = image
            const { url } = images.downsized_medium
            // console.log(image)
            return { title, id, url }
        })
        return gifs
    }
    return []
}

export default function getGifs ({limit = 10, keyword = 'homero', page = 0} = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`

    return fetch(apiURL)                                    
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}