//sample components
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>;
}
//creating a greeting component that displays either components depending on whether user is logged in

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting/>;
}

const root = ReactDom.CreateRoot(document.getElementById('root'));
//try changing is logged in to true
root.render(<Greeting isLoggedIn={false} />);