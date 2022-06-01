//making the clock stuff reusable
const root = ReactDom.createRoot(document.getElementById('root'))

function Clock(props) {
    return (
        <div>
        <h1>Hello, world!</h1>
        <h2>It Is {props.date.toLocaleTimeString()}</h2>
        </div>
        );
    }

    function tick() {
        root.render(<Clock date={new Date()} />);
    }
    setInterval(tick, 1000);

    //code to ensure the clock update itself
    root.render(<Clock />);

/**converting a function to a class */
//create an es6 class with the same name that extends the react.component
//add a single empty method to it called render
//move the function body to the render method
//replace props with this.props in the render body
//delete the remaining empty function declaration

class Clock extends React.Component {
    //adding a class constructor that assigns initial this.state
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    //mounting and unmounting the timer in react
    //these are called lifecycle methods

    componentDidMount() {
        //runs after the component output has been rendered to the dom
        this.timerID = setInterval(() => this.tick(), 1000
        );

    }
    componentWillUnmount() {
        //tearing down the timer in the lifecycle method
        clearInterval(this.timerID)
    }

    //method tick that clock component will run every second
    tick() {
        this.setState({date: new Date()});
    }
    render() {
        return (
            <div>
                <h1>Hello, suckers!</h1>
                //adding local state to the class
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
//class components  should always call the base constructor with props
//removing the date prop from the clock elem
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />)

