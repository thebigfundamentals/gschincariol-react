import React, {createContext, useState} from 'react';

const LanguageContext = createContext();

function LanguageProvider(props){
    const [language, setIsLanguage] = useState('pt');
    const changeLanguage = (lang) => {
        setIsLanguage(lang);
        sessionStorage.setItem('language_gsc', lang);
    };
    const checkStorage = () => {
        const lang = navigator.language;
        if (sessionStorage.getItem('language_gsc')) {
            return
        } else {
            if (lang.includes('pt')) {
                sessionStorage.setItem('language_gsc', 'pt');
                changeLanguage('pt');
            } else {
                sessionStorage.setItem('language_gsc', 'other')
                changeLanguage('en')
            }
        }
    
    };
    checkStorage();
    return (
        <div>
            <LanguageContext.Provider value={{language, changeLanguage}}>
                {props.children}
            </LanguageContext.Provider>
        </div>
    );
}

export {LanguageContext, LanguageProvider};