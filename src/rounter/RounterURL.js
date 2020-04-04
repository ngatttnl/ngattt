import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './../components/Home';
  import Contact from './../components/Contact';
  import Teaching from './../components/Teaching'
  import Photo from './../components/Photo'
  import About from './../components/About'
  import Theses from './../components/Theses'
class RounterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/about" component = {About} />
                    <Route exact path="/teaching" component = {Teaching} />
                    <Route exact path="/photo" component = {Photo} />
                    <Route exact path="/contact" component = {Contact} />
                    <Route exact path="/theses" component = {Theses} />
                </div>
            </Router>
        );
    }
}

export default RounterURL;