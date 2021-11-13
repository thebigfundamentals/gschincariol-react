import React, { useContext } from 'react'
import { LanguageContext } from './contexts/LanguageContext';

function LangSelector() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const handleLanguage = (lang) => {
        changeLanguage(lang)
    }
    return (
        <>
            <div className="lang ms-auto me-1 text-muted fs-6 fw-light">
                <span className={`lang-selector ${language === 'pt' ? 'lang-selected' : null}`}
                    onClick={() => handleLanguage('pt')}>
                    pt</span> | <span className={`lang-selector ${language === 'en' ? 'lang-selected' : null}`}
                        onClick={() => handleLanguage('en')}>
                    en</span>
            </div>
        </>
    )
}

export default LangSelector
