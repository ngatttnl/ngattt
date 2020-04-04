import React, { Component } from './../../node_modules/react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer bg-dark">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="footer-heading mb-4 text-white">About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Read More</a></p>
                    </div>
                    <div className="col-md-5 mb-4 mb-md-0 ml-auto">
                    <div className="row mb-4">
                        <div className="col-md-6">
                        <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                        </div>
                        <div className="col-md-6">
                        <h3 className="footer-heading mb-4 text-white">Free Templates</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">HTML5 / CSS3</a></li>
                            <li><a href="#">Clean Design</a></li>
                            <li><a href="#">Responsive</a></li>
                            <li><a href="#">Multi Purpose Template</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12">
                        <h3 className="footer-heading mb-4 text-white">Stay up to date</h3>
                        <form action="#" className="d-flex footer-subscribe">
                            <input type="text" className="form-control rounded-0" placeholder="Enter your email" />
                            <input type="submit" className="btn btn-primary rounded-0" defaultValue="Subscribe" />
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                        <div className="col-md-12">
                        <p>
                            <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook" /></a>
                            <a href="#" className="p-2"><span className="icon-twitter" /></a>
                            <a href="#" className="p-2"><span className="icon-instagram" /></a>
                            <a href="#" className="p-2"><span className="icon-vimeo" /></a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                    <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                    </div>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;