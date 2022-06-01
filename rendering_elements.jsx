const element0 = <h1>Hello, world</h1>;
//the famous div root
<div id="root"></div>

//creating a react element, pass it to the react-dom.createRoot then pass it to the root.render
const root = ReactDom.createRoot(
    document.getElementById('root')
);
const element5 = <h1>Hello, World</h1>;
root.render(element5);

//elements are immutable since an element represents the ui at a specific point in time
//example in a clock
const root = ReactDom.createRoot(
    document.getElementById('root')
);

function tick() {
    const element = (
        <div>
            <h1>Hello, world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000);
