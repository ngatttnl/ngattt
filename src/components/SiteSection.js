import React, { Component } from './../../node_modules/react';

class SiteSection extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={"site-half" + this.props.block}>
                <div className={"img-bg-1" + this.props.right} style={{backgroundImage: 'url('+ this.props.image + ')'}} data-aos="fade" />
                <div className="container">
                    <div className="row no-gutters align-items-stretch">
                        <div className={"col-lg-5 " + this.props.style + " py-5"}>
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">{this.props.smallTit}</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">{this.props.Title}</h2>
                        <p>{this.props.content}</p>
                        <p style={{color: 'Green'}}>{this.props.vietContent}</p> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteSection;