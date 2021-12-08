import React, {createContext, useState, useEffect} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // the logic is reversed because setDarkMode is async, and there is no callback with hooks
        darkMode ? localStorage.setItem('theme_gsc', 'light') : localStorage.setItem('theme_gsc', 'dark');
    };
    useEffect(() => {
        const theme = localStorage.getItem('theme_gsc');
        if(theme === 'dark'){
            setDarkMode(true);
        } else if(theme === 'light'){
            setDarkMode(false);
        }
    }, []);
    return (
        <div>  
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
};

export {DarkModeContext, DarkModeProvider};