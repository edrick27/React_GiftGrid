import { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './Gifitem';
import PropTypes from "prop-types";


export const GifGrid = ({category}) => {


    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { isLoading && (<h2>Cargando...</h2>) }

            
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem 
                            key={img.id} 
                            title={img.title} 
                            url={img.url} 
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
