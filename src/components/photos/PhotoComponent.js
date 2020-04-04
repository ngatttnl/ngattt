import React, { Component } from './../../../node_modules/react';

class PhotoComponent extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay>
                <a href={this.props.image} data-fancybox="gallery"><img src={this.props.image} alt="Image" className="img-fluid" /></a>
            </div>
        );
    }
}

export default PhotoComponent;