function WarningBarner(props) {
    if (!props.warn) {
        return  null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state= {showWarning: true};
        //binding to ensure this works
        this.handleToggleClick = this.handleToggleClick.bind(this);
        }

        handleToggleClick(){
            this.setState(state => ({ showWarning: !state.showWarning}));
        }

        render() {
            return (
                <div>
                    <WarningBarner warn={this.state.showWarning} />
                    <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                    </button>
                </div>
            );
        }
    }

//handling the react-dom
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Page />)