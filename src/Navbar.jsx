import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import content from './content/content';
import { LanguageContext } from './contexts/LanguageContext';

function Navbar() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <header className="col-md-8 mb-2 text-center">
                <Link to="/">
                    <h1>gabriel schincariol cavalcante</h1>
                </Link>
            </header>
            {content[language].navbar}
        </>
    )
}

export default Navbar
