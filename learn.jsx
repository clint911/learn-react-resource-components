//embedding expressions in js
const name = "Clinton"
const element = <h1>Hello, {name}</h1>
//formatting input with a function
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user  = {
    firstName: 'Harper'
    lastName: 'Perez'
};

const element = ( 
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
//specifying string literals as attributes
//adding a link as a jsx element 
const element = <a href="https://www.reactjs.org"> link</a>;
//adding an image....in jsx
const element = <img src={user.avatarUrl}></img>

//specifying children with jsx
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

//embedding user input in jsx as it prevents injection attack
const title = response.potentiallyMaliciousInput;
//this is safe
const element1 = <h1>{Title}</h1>;

//here goes hello world in react
const element2 = (
    <h1 className = "greeting">
        Hello, World
    </h1>
)
//another form of hello world
const element3 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);