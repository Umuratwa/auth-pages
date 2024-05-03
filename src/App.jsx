// import React from 'react'
// import Nav from './components/nav'
// import Body from './components/body'
// import Gara from './components/gara'
// const App =() =>{
//   return (
//     <div>
//   <Nav/>
//   <Body/>
//   <Gara/>
  
//     </div>
    
//   )
// }

// export default App
// App.js
import React from 'react';
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from "react-router-dom"
import Signin from './components/Signin';
import SignUp from './components/signup'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </ BrowserRouter>
  );
}

export default App;

