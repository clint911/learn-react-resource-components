const { number } = require("prop-types");

//demonstrating correct key usage
function ListItem(props) {
    //Correct! There is no need to specify the key here
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => //specify key here inside of the array.
    <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}