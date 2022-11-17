function Car(props) {
    return(
        <li>
            I am a {props.brand}
        </li>
    ); 
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <div>
            <h4>Who lives in my garage?</h4>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


function Garage() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <div>
            <h4>Who lives in my garage?</h4>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </div>
    );
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<Garage />);