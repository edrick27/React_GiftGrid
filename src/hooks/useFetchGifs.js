import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

     const [images, setImages] = useState([]);
     const [isLoading, setLoading] = useState(true);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(() => gifs);
        setLoading(() => false);
    }

    useEffect(() => {
        getImages();
    }, [] )

    return {
        images,
        isLoading
    }
}
