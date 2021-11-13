import React, { useContext } from 'react';
import content from './content/content';
import { LanguageContext } from './contexts/LanguageContext';

function Error404() {
    const { language } = useContext(LanguageContext)
    return (
        <div className="error">
            {content[language].error}
            <div><img src="images/budSquare.jpg" width="250"></img></div>
        </div>
    )
}

export default Error404
