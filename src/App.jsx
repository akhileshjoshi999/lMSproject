
// import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
// import './App.css'

import HomePage from './Pages/HomePage'
import Aboutus from './Pages/Aboutus'
import Signup from './Pages/Signup'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/about" element={<Aboutus/>} ></Route>
        
<Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      
  
    </>
  )
}

export default App
