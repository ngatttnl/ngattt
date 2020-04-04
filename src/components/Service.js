import React, { Component } from './../../node_modules/react';

class Service extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay>
                <div className="text-center">
                    <span className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary" />
                    <h3 className="text-uppercase h4 mb-3">{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Service;