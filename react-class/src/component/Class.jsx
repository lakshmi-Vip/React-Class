// import React, {Component} from 'react'

// class Greerting extends Component{
//     render() {
//         return (
//         <div>
//             <h2>Hello I am Class Componets</h2>
//          </div>
//          )
//     }
// }

// export default Greerting
// with props
// import React, { Component } from "react";

// class Welcome extends Component {
//     render() {
//         return <h2>Welcome, {this.props.name}!</h2>;
//     }
// }

// export default Welcome;

//with state
import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;

