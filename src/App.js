import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import SpringSummer from './pages/Spring-Summer-2018.jsx';
import FallWinter from './pages/Fall-Winter-2017.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Spring-Summer-2018" component={SpringSummer}/>
                    <Route path="/Fall-Winter-2017" component={FallWinter}/>
                </div>
            </Router>
        );
    }
}

export default App;
