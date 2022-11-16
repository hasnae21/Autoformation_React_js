function Football() {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Goaaaaaaal!")}>shoot!</button>
    );
  }
  
ReactDOM.render(<Football />,document.getElementById('root'))
