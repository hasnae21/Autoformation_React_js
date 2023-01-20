import React from 'react'
// import "bootstrap/dist/css/bootstrap.css"
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// import SearchStagiaire from "./components/searchStagiaire";

function App() {
  return (
    <div>
      <form>
        <div class="form-row">
          <div class="col-7">
            <input type="text" class="form-control" placeholder="City">
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

{/* <Routes> 
      <Route path='/stagiaires/searchStagiaire' element={<searchStagiaire />}></Route>
      </Routes> */}