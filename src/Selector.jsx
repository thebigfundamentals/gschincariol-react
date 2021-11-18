import React, { useContext } from 'react'
import { LanguageContext } from './contexts/LanguageContext';
import { DarkModeContext } from './contexts/DarkModeContext';

function Selector() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const handleLightMode = () => {
        toggleDarkMode();
    };
    const { language, changeLanguage } = useContext(LanguageContext);
    const handleLanguage = (lang) => {
        changeLanguage(lang)
    }
    return (
        <div className="d-flex"
            style={{ width: '100%', margin: '0 auto' }}>
            <div className="selector light-selector me-auto ms-4">
                <i class={darkMode ? `fas fa-lightbulb` : `far fa-lightbulb`} onClick={handleLightMode} />
            </div>
            <div className="selector text-muted fs-6 fw-light ms-auto me-4">
                <span className={`lang-selector ${language === 'pt' ? 'lang-selected' : null}`}
                    onClick={() => handleLanguage('pt')}>
                    pt</span> | <span className={`lang-selector ${language === 'en' ? 'lang-selected' : null}`}
                        onClick={() => handleLanguage('en')}>
                    en</span>
            </div>
        </div>
    )
}

export default Selector
