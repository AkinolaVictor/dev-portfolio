import React from 'react';
import TextEngine from '../TextEngine';


function TextFadeOverlay(props) {


    return (
        <TextEngine
            defaultAnimation={{
                opacity: [0.2, 1]
            }}
            {...props} 
        />
    );
}

export default TextFadeOverlay
