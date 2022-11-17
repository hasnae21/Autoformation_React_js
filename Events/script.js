// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Click and shot!</button>
//   );
// }
// ReactDOM.render(<Football />,document.getElementById('root'));


// function Football() {
//       const shoot = (a) => {
//           alert(a);
//         }
    
//         return (
//             <button onClick={() => shoot("Goaaaaaaal!")}>shoot!</button>
//     );
//   }
  
// ReactDOM.render(<Football />,document.getElementById('root'));



function ActionLink() {
  function handleClick(a) {
    a.preventDefault();
    console.log('Le lien a été cliqué.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Clique ici
    </a>
  );
}
ReactDOM.render(<ActionLink />,document.getElementById('root'));
