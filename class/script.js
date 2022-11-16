// Class Component
class App extends React.Component {
    render() {
      return <h2>Hi, I am a class Component!</h2>;
    }

}
ReactDOM.render(<App/>,document.getElementById('app'));


// Component Constructor
class Car1 extends React.Component {

    constructor() {
      super();
      this.state = {color: "red"};

    }
    render() {
      return <h2>I am a Car!</h2>;
    }
}
ReactDOM.render(<Car1/>,document.getElementById('app1'));

class Car2 extends React.Component {
    constructor() {
      super();
      this.state = {color: "Blue"};
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
}
ReactDOM.render(<Car2/>,document.getElementById('app2'));


// Props
class Prop extends React.Component {
    render() {
      return <h2>I am a {this.props.color} Car!</h2>;
    }
}
ReactDOM.render(<Prop color="red"/>,document.getElementById('root'));


// Props in the Constructor
class PropC extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h2>I am a {this.props.model} !!</h2>;
    }
}
ReactDOM.render(<PropC model="Mustang"/>,document.getElementById('rt'));
// const roote = ReactDOM.createRoot(document.getElementById('rt'));
// roote.render(<PropC model="Mustang"/>);