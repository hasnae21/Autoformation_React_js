//exemple1
function MissedGoal() {
    return <h1>MISSED!</h1>;
}
function MadeGoal() {
    return <h1>Goal!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

ReactDOM.render(
    <Goal isGoal={1} />,
    document.getElementById('root')
);
ReactDOM.render(
    <Goal isGoal={false} />,
    document.getElementById('root1')
);


//exemple2
function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}
function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root2')
);
ReactDOM.render(
    <Greeting isLoggedIn={true} />,
    document.getElementById('root3')
);


//exemple3
function Garage(props) {
    const cars = props.cars;
    return (
        <div>
            <h2>Garage</h2>
            {cars.length > 0 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </div>
    );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<Garage cars={cars} />);


//exemple4
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<Toggle />);


//exemple5
function MissedGoal() {
    return <h1>MISSED!</h1>;
}
function MadeGoal() {
    return <h1>Goal!</h1>;
}
function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <div>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </div>
    );
}

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(<Goal isGoal={false} />);
const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(<Goal isGoal={true} />);