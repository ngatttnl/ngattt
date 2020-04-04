import React, { Component } from 'react';

class TeachingDetail extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up" data-aos-delay>
                <div className="text-center">
                    <span className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary" />
                    <h3 className="text-uppercase h4 mb-3">{this.props.title}</h3>
                    <p>{this.props.content} </p>
                </div>
            </div>
        );
    }
}

export default TeachingDetail;