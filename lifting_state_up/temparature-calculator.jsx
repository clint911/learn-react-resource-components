//component boiling verdict
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
    }

//component calculator that renders boiling verdict for the current input value, also asks for input value
    class Calculator extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {temparature: ' '};

        }

        handleChange(e) {
            this.setState({temparature: e.target.value});
        }

        render() {
            const temparature = this.state.temparature;
            
        
        return (
            <fieldset>
            <legend>Enter temparature in Celcius:</legend>
            <input value={temparature}
            onChange={this.handleChange} />
            <BoilingVerdict celsius={parseFloat(temparature)} />
            </fieldset>
        );
    }

        
    }
    //temparature input component for hnadling the second input
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    class TemparatureInput extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state  = {temparature: ' '};
        }
        handleChange(e) {
            this.setState({temparature: e.target.value});
        }
``
        render() {
            const temparature = this.props.temparature;
            const scale = this.props.scale;
            return (
                <fieldset>
                    <legend>Enter temparature in {scaleNames[scale]}:</legend>
                    <input value={temparature}
                    onChange={this.handleChange} />
                </fieldset>
            );
        }
    }

//writing two conversion functions
function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

function tryConvert(temparature, convert) {
    const input = parseFloat(temparature);
    if(Number.isNaN(input)) {
        return ' ';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}