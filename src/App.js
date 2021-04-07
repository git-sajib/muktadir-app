import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Header/Navigation/Home';
import Contact from './Components/Header/Navigation/Contact';
import Service from './Components/Header/Navigation/Service';
import Team from './Components/Header/Navigation/Team';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
              <div className="App">
                    <Header />
                      <Route path='/' exact component={Home}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/service' component={Service}/>
                      <Route path='/team' component={Team}/>
                    <Footer />
              </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
