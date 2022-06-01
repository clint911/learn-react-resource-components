//note we only have one way to update the ui in react, calling the root.render()
//the tick example
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
    const element = ( 
        <div> 
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleDateString()}.</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000);