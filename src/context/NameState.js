import React from 'react';
import NameContext from './NameContext';

const NameState = (props) => {
    const details = {
        "name": "Shiv Narayan Gupta",
        "registration": "11801620"
    }
    return (
            <NameContext.Provider value={details}>
                {props.children}
            </NameContext.Provider>
    )
}

export default NameState
