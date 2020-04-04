import React, { Component } from './../../node_modules/react';

class MediaImage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="media-image">
                <img src={this.props.image} alt="Image" className="img-fluid" />
                <div className="media-image-body">
                <h2 className="font-secondary text-uppercase">{this.props.title}</h2>
                <p>{this.props.content}</p>
                <p><a href={this.props.path} className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
            </div>
        );
    }
}

export default MediaImage;