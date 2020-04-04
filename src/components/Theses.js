import React, { Component } from 'react';
import MediaImage from './MediaImage'
class Theses extends Component {
    render() {
        return (
            <div class="site-section first-section">{/*Site Section*/}
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                        <span class="caption d-block mb-2 font-secondary font-weight-bold">Theses</span>
                        <h2 class="site-section-heading text-uppercase text-center font-secondary">Share To Be Shared</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 block-13 nav-direction-white">
                        <div class="nonloop-block-13 owl-carousel">
                            <MediaImage image="images/img_1.jpg" path="#" title="Restaurant Management" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."/>
                            <MediaImage image="images/img_2.jpg" path="#" title="Project Management" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."/>
                            <MediaImage image="images/img_3.jpg" path="#" title="Website Management" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."/>
                            <MediaImage image="images/img_4.jpg" path="#" title="Smart Garden" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."/>
                            <MediaImage image="images/img_5.jpg" path="#" title="Smart Home" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Theses;