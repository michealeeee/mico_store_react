import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link} from "react-router-dom";
import './App.css'
import './header.css'
import Header from "./header"
import './body.css'
import Body from './body'
import './signup.css'
import Signup from './signup'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Header />}></Route>
         <Route path="/" element={<Body /> }></Route>
          <Route path="/signup" element={<Signup /> }></Route>
        </Routes>
        </Router>
   
   
     
    
  )
}

export default App
