import React from 'react';
import CombineLoginRegister from './components/CombineLoginRegister';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard';



const App = () => {
  return (<>
    <div>
      <Router>
      <div className="App">
    <Navbar/><br/><br/><br/><br/>
    <Routes>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" element={<CombineLoginRegister/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </div>
  </Router>
    </div>
    </> )
}

export default App