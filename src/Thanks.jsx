import React, { useEffect } from 'react';
import content from './content/content';
import { LanguageContext } from './contexts/LanguageContext';

function Thanks() {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    const actualLang = sessionStorage.getItem('language_gsc');
    useEffect(() => {
        changeLanguage(actualLang);
    }, []);
    return (
        content[language].thanks
    )
}

export default Thanks
