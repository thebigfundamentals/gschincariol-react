import React from 'react'
import content from './content/content';
import { LanguageContext } from './contexts/LanguageContext';

function Contact() {
    const { language } = React.useContext(LanguageContext);
    return (
        content[language].contact
    )
}

export default Contact
