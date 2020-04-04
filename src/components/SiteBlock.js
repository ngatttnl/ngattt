import React, { Component } from './../../node_modules/react';

class SiteBlock extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: 'url('+ this.props.image + ')'}} data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center" data-aos="fade">
                    <h1 className="font-secondary  font-weight-bold text-uppercase">Welcome to my website</h1>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default SiteBlock;