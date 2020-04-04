import React, { Component } from './../../node_modules/react';

class Navbar extends Component {
    render() {
        return (
            <div>
                 <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div> {/* .site-mobile-menu */}
        <div className="site-navbar-wrap js-site-navbar bg-white">
          <div className="container">
            <div className="site-navbar bg-light">
              <div className="row align-items-center">
                <div className="col-2">
                  <h2 className="mb-0 site-logo"><a href="index.html" className="font-weight-bold text-uppercase">Thanh Nga</a></h2>
                </div>
                <div className="col-10">
                  <nav className="site-navigation text-right" role="navigation">
                    <div className="container">
                      <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a></div>
                      <ul className="site-menu js-clone-nav d-none d-lg-block">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/teaching">Teaching</a></li>
                        <li><a href="/photo">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/theses"><span className="d-inline-block bg-primary text-white btn btn-primary">Theses</span></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default Navbar;