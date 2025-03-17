//import React from 'ract'
import React, { useState, useEffect } from "react";

function WithLoading(WrapedComponent) {
    return ({isloading, ...props}) => {
         if(isloading) {
            console.log('true')
         }
         return <WrapedComponent {...props} />
    }
    

}
const DataComponent = ({ data }) => {
    return <h2>Data: {data}</h2>;
};

const EnhancedComponent = WithLoading(DataComponent)

const App = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setData("Hello, React!");
            setLoading(false);
        }, 2000);
    }, []);

    return <EnhancedComponent isLoading={loading} data={data} />;
};

export default App;




// export default withLoading;

//✅ Authentication HOC – Redirect users if they are not logged in.
//✅ Permission-Based HOC – Show or hide components based on user roles.
//✅ Logging or Analytics HOC – Track component rendering for debugging.
//✅ Theme HOC – Apply themes dynamically.

