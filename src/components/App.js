import React from './../../node_modules/react';
import logo from './../logo.svg';
import './../css/App.css';
import Navbar from './Navbar';
import SideBlock from './SiteBlock';
import Footer from './Footer';
import RounterURL from './../rounter/RounterURL';

function App() {
  return (
    <div className="site-wrap">{/*Site wrap*/}
            <Navbar />
            <div className="slide-one-item home-slider owl-carousel">
                <SideBlock image ="images/hero_2.jpg"/>
                <SideBlock image ="images/hero_1.jpg"/>
            </div>
            <div className="slant-1"></div>
            <RounterURL />
            <Footer />
    </div> 
  );
}

export default App;
