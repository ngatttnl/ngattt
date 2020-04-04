import React, { Component } from 'react';
import TeachingDetail from './TeachingDetail'

class Teaching extends Component {
    render() {
        return (
            <div className="site-section first-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center" data-aos="fade">
                            <span className="caption d-block mb-2 font-secondary font-weight-bold">My Teaching</span>
                            <h2 className="site-section-heading text-uppercase text-center font-secondary">Love Us Nong Lam University</h2>
                        </div>
                        <div className="row border-responsive">
                            <TeachingDetail title = "Advanced Programming" content = "Providing the basic procedural programming and going deeper into object-oriented programming using Java programming language. Also providing how to use Swing to make a Graphic User Interface..."/>
                            <TeachingDetail title = "Object - Oriented Design" content = "Providing the basic concepts, object-oriented principles, design models applied in software development to build a flexible, reusable software, easy to maintain, cope with changing requirements..."/>
                            <TeachingDetail title = "Human Computer Interaction" content = "Designing interactive computer systems to be effective, efficient, easy, and enjoyable to use is important, so that people and society may realize the benefits of computation- based devices..."/>
                            <TeachingDetail title = "Software Testing" content = "Evaluating the functionality of a software application with an intent to find whether the developed software met the specified requirements or not and to identify the defects to ensure that the product is defect free..."/>
                            <TeachingDetail title = "Human Computer Interaction" content = "Designing interactive computer systems to be effective, efficient, easy, and enjoyable to use is important, so that people and society may realize the benefits of computation- based devices..."/>
                            <TeachingDetail title = "Software Testing" content = "Evaluating the functionality of a software application with an intent to find whether the developed software met the specified requirements or not and to identify the defects to ensure that the product is defect free..."/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Teaching;