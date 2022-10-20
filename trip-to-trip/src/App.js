// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Community from './Community/Community';
import DiscoverPage from './DiscoverPage/DiscoverPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Routes>
              <Route exact path="/Home" element={<Home/>}/>
              <Route exact path="/Discover" element={<DiscoverPage/>}/>
              <Route exact path='/Community' element={<Community/>}/>
              <Route exact path='/SpecialDeal' element={<Home/>}/>
              <Route exact path='/AboutUs' element={<Home/>}/>
              <Route exact path='/SignIn' element={<Home/>}/>
              <Route exact path='/Register' element={<Home/>}/>
              <Route exact path='/' element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
