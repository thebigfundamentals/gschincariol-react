import React from 'react';
import content from './content/content';
import { LanguageContext } from './contexts/LanguageContext';

function Thanks() {
    const { language } = React.useContext(LanguageContext);
    return (
        content[language].thanks
    )
}

export default Thanks
