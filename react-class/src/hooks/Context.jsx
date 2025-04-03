import React, {createContext, useContext} from 'react';
import Contextchild from './Contextchild';

export const Username = createContext();
export const Place = createContext();

const Context = () => {
    return (
        <div>
            <h1>Context API</h1>
            <Username.Provider value={'React hooks'}>
                <Place.Provider value={'India'}>
                <Contextchild />
                </Place.Provider>
            </Username.Provider>
        </div>
    )
}

export default Context

