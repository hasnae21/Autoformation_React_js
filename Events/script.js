function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Click and shot!</button>
  );
}

ReactDOM.render(<Football />,document.getElementById('root'));


// function Football() {
//     const shoot = (a) => {
//       alert(a);
//     }
  
//     return (
//       <button onClick={() => shoot("Goaaaaaaal!")}>shoot!</button>
//     );
//   }
  
// ReactDOM.render(<Football />,document.getElementById('root'));
