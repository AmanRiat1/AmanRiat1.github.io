import React from 'react';
import './App.css';
import NavBar from'./Nav/'
import Home from './Home/'
import Tutorial from './Tutorial/'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <div className="col-sm-2" >
            <NavBar></NavBar>
          </div>
          <div className="col-sm-10">
            <Route path='/home' component={Home} />
            <Route path='/tutorial' component={Tutorial} />
          </div>
        </div>
        
        <footer className='footer mt-auto py-3 bg-dark text-white'>
          <div className="row">
            <div className="col-sm-2" >
              <p>Location: XXX Street</p>
              <p>Telphone: XXX Street</p>
            </div>
            <div className="col-sm-8">
              <p className="shopText">Spike's Repair Shop</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
