//component that accepts an array of numbers and outputs a list of elements
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li key={number()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);