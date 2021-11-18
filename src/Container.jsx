import React, { useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext';

function Container(props) {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className="Container"
            style={darkMode ? { backgroundColor: '#0C0C0C' } : { backgroundColor: 'white' }}
        >
            {props.children}
        </div>
    )
}

export default Container
