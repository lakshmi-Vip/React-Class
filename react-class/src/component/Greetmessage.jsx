import React from 'react'
import {DestructureProps} from './Props'

const Greet = (prop) => {
    return (
        <h1>Hello World {prop.name}</h1>
    )
}


export function Welcome(props) {
    return(
    <div>
        <h2>Welcome, {props.place}!</h2>
        <h3>Multiple Propes Usage, {props.capital}</h3>
        <h4>This is destructuring </h4>
        <DestructureProps />
    </div>
        
    )
}


export default Greet