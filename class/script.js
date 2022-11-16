class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
}


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Car />);
