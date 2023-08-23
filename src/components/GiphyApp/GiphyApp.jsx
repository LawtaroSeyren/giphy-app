import React from 'react'
import { useState, useEffect } from 'react'
import AddCategory from '../AddCategory/AddCategory'
import GifGrid from '../GifGrid/GifGrid'
import ButtonMode from '../ButtonMode/ButtonMode'

const GiphyApp = () => {

    const [categories, setCategories] = useState(["BETTER CALL SAUL"])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    const onDeleteCategory = (categoryToDelete) => {
        const updatedCategories = categories.filter(category => category !== categoryToDelete);
        setCategories(updatedCategories);
    };

    const [isPinkMode, setIsPinkMode] = useState(false); // Estado para el modo rosa

    useEffect(() => {
        const storedCategories = localStorage.getItem('categories');
        if (storedCategories) {
            setCategories(JSON.parse(storedCategories));
        }

        const storedPinkMode = localStorage.getItem('isPinkMode');
        if (storedPinkMode) {
            setIsPinkMode(JSON.parse(storedPinkMode));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);


    // Cuando se actualice el modo rosa, guarda el nuevo estado en local storage
    useEffect(() => {
        localStorage.setItem('isPinkMode', JSON.stringify(isPinkMode));
    }, [isPinkMode]);




    return (
        <div className={isPinkMode ? "appContainer-pink" : "appContainer"}>
            <h1>Giphy App</h1>

            <AddCategory onNewCategory={(e) => onAddCategory(e)} />

            {categories.map((category) => {
                return <GifGrid key={category} category={category} onDeleteCategory={onDeleteCategory} />
            })}

            <ButtonMode isPinkMode={isPinkMode} setIsPinkMode={setIsPinkMode} />

        </div>
    )
}

export default GiphyApp