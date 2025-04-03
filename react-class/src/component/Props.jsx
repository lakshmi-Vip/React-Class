function Button({ handleClick }) {
    return <button onClick={handleClick}>Click Me</button>;
}
function Card(props) {
    return (
        <div style={{ border: "1px solid black", padding: "10px" }}>
            {props.children}
        </div>
    );
}
//export const DestructureProps = ({code='es6', exp='5'}) => {
  export  const DestructureProps = (props) => {
     const  {code,exp} = props
    return (
        <div>
            <p>Extrating props by using the destructuring {code} and {exp}</p>
        </div>
    )
}

function App1() {
    const showAlert = () => {
        //console.log('Hey button')
        alert('Hey Prop')
    };

    return( 
    <div>
        <Card>
            <DestructureProps code='React' exp='6'/>
        <Button handleClick={showAlert} />
        </Card>
    </div>);
}

export default App1;
