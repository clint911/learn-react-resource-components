//Defining a component using functions
function welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

//using classes
class welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
//the above are one and the same from reacts point of view
//elements representing user defined components
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <welcome name="Sara" />
root.render(element);
