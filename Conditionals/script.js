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

ReactDOM.render(<Goal isGoal={1} />,document.getElementById('root'));
ReactDOM.render(<Goal isGoal={false} />,document.getElementById('root1'));
