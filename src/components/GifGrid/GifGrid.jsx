import React from 'react'
import GifCard from '../GifCard/GifCard';
import useFetchGifs from '../hooks/useFetchGifs';




const GifGrid = ({ category, onDeleteCategory }) => {

    const { images, isLoading, fetchGifs } = useFetchGifs(category);

    const handleDelete = () => {
        onDeleteCategory(category);
    };

    return (
        <>
            <div className="categoryContainer">
                <h2>{category}</h2>
                <div className="buttonContainer">
                    <button className="btnReload" onClick={fetchGifs}>REGENERAR</button>
                    <button className="btnDelete" onClick={handleDelete}>ELIMINAR</button>
                </div>
                {isLoading && (<h3>Cargando...</h3>)}
            </div>


            <div className="card-grid">
                {images.map((image) => <GifCard key={image.id} {...image} category={category} ></GifCard>)}
            </div>
        </>
    )
}

export default GifGrid