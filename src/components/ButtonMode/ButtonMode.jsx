import React, { useState } from 'react';

const ButtonMode = ({ isPinkMode, setIsPinkMode }) => {

    const rosa = "Cambiar a Rosa 🎀"
    const celeste = "Cambiar a Celeste 💎"

    const [colorButton, setColorButton] = useState(rosa);

    const togglePinkMode = () => {
        const newColorButton = isPinkMode ? rosa : celeste ;
        setColorButton(newColorButton);
        setIsPinkMode(prevMode => !prevMode);
    };

    return (
        <button onClick={togglePinkMode} className="btnMode">
            {colorButton}
        </button>
    );
}

export default ButtonMode;
