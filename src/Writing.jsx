import React from 'react';
import content from './content/content';
import { LanguageContext } from './contexts/LanguageContext';

function Writing() {
    const { language } = React.useContext(LanguageContext);
    return (
        <div className="content col-md-8 col-10 d-flex flex-column align-items-center justify-content-center">
            {content[language].writing}
        </div>
    )
}

export default Writing
