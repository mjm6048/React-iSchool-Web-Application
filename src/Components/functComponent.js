//simple functional component!
export function Welcome(props) {
    return <h1>Hi, my name is {props.name}</h1>
}

//more complex functional component
export function Welcome2(props) {
    return (
        <section style={props.myClass}>
            <h1>Welcome again {props.firstName}</h1>
            <div className="myClass">Some text here...</div>
        </section>
    );
}