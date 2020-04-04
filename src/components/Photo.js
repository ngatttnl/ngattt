import React, { Component } from 'react';
import PhotoComponent from './photos/PhotoComponent'
class Photo extends Component {
    render() {
        return (
            <div className="site-section first-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center" data-aos="fade">
                            <span className="caption d-block mb-2 font-secondary font-weight-bold">Photo Gallery</span>
                            <h2 className="site-section-heading text-uppercase text-center font-secondary">My Photo Gallery</h2>
                        </div>
                    </div>
                    <div className="row">
                        <PhotoComponent image="images/gallery/1.jpg"></PhotoComponent>
                        <PhotoComponent image="images/gallery/2.jpg"></PhotoComponent>
                        <PhotoComponent image="images/gallery/3.jpg"></PhotoComponent>
                        <PhotoComponent image="images/gallery/4.jpg"></PhotoComponent>
                        <PhotoComponent image="images/gallery/5.jpg"></PhotoComponent>
                        <PhotoComponent image="images/gallery/6.jpg"></PhotoComponent>
                        <PhotoComponent image="images/gallery/7.jpg"></PhotoComponent>
                        <PhotoComponent image="images/gallery/8.jpg"></PhotoComponent>
                    </div>
                </div>
          </div>
        );
    }
}

export default Photo;