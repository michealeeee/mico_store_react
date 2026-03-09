import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link} from "react-router-dom";
import Header from "./header"
import Body from './body'
import Signup from './signup'
import Login from './login'
import './App.css'
import './header.css'
import './body.css'
import './signup.css'
import './login.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={
         <>
          <Header />
          <Body />
        </> 
      }></Route>
          <Route path="/signup" element={<Signup /> }></Route>
          <Route path="/login" element={<Login /> }></Route>
        </Routes>
        </Router>
   
   
     
    
  )
}

export default App
