function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');

    }
    return (
        <form onSubmit={handleSubmit}><button
        type="submit">Submit</button></form>
    );
}

//an event handler using an es6 class
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        //binding in order to make sure this works in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}