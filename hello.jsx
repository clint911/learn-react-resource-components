class shoppingCart extends React.Component {
    render() {
        return (
            <div classname="shopping-list">
                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Oculus</li>
                    <li>Discord</li>
                </ul>
            </div>
        )
    }
}
//react game
class Board  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares})
    }
    renderSquare(i) {
        return (
        <Square value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} />
        );
    }
}

class Square extends React.Component {
    constructor(props) {
        super(proprs);
        this.state= {
            value: null,
        };
    }
    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
            <div  className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
         </div>
         </div>
        );
    }
}
//function to calculaye the winner
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}