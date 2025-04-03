import React, {useContext} from 'react';
import { Username, Place } from './Context';


const Contextchild = () => {
    const name = useContext(Username);
    const place = useContext(Place);
    return (
        <div>
            <h1>Chaild context</h1>
            <p>Name of the topic {name}{place}</p>
        </div>
    )
}

export default Contextchild