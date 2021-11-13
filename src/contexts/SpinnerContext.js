import React, {createContext, useState} from 'react';

const SpinnerContext = createContext();

function SpinnerProvider(props){
    const [isLoading, setIsLoading] = useState(true);
    const toggleIsLoading = (boolean) => setIsLoading(boolean);
    return (
        <div>
            <SpinnerContext.Provider value={{isLoading, toggleIsLoading}}>
                {props.children}
            </SpinnerContext.Provider>
        </div>
    );
}

export {SpinnerContext, SpinnerProvider};