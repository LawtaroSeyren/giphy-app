import React, { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {


    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value) 
    }

    const onSubmit = (e) => {
        event.preventDefault(); 
        let newInputValue = inputValue.trim().toUpperCase();
        if ( newInputValue.length > 1 ) { 
            
            onNewCategory(newInputValue);
}
        setInputValue("");
    }


    return (
        <form onSubmit= { onSubmit }>
            <input type="text" placeholder="Ingresa tu búsqueda" value={inputValue} onChange={onInputChange}>
            </input>
        </form>
    )
}

export default AddCategory