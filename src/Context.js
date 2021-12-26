import React, { useContext } from 'react';

const theme = React.createContext('');

function Context() {
    const theme1 = useContext(theme)

    return(
        <div
        style={{
            background: theme1 === 'dark' ? 'black' : 'papayawhip',
            color: theme1 === 'dark' ? 'white' : 'palevioletred',
            width: '100%',
            minHeight: '200px'
            }}
        >
            
            <button className={theme1}>Click</button>
        </div>
    );
}

export default Context;