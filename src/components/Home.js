import React, { Component } from 'react';
import Navbar from './Navbar';
import SideBlock from './SiteBlock';
import Service from './Service';
import SiteSection from './SiteSection';
import MediaImage from './MediaImage';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="site-section first-section">
                    <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center" data-aos="fade"> 
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">MY TEACHING</span>
                        <h2 className="site-section-heading text-uppercase text-center font-secondary">Join us in NLU</h2>
                        </div>
                    </div>
                    <div className="row border-responsive">
                        <Service title = "Advanced Programming" content = "Providing the basic procedural programming and going deeper into object-oriented programming using Java programming language. Also providing how to use Swing to make a Graphic User Interface..."/>
                        <Service title = "Object - Oriented Design" content = "Providing the basic concepts, object-oriented principles, design models applied in software development to build a flexible, reusable software, easy to maintain, cope with changing requirements..."/>
                        <Service title = "Human Computer Interaction" content = "Designing interactive computer systems to be effective, efficient, easy, and enjoyable to use is important, so that people and society may realize the benefits of computation- based devices..."/>
                        <Service title = "Software Testing" content = "Evaluating the functionality of a software application with an intent to find whether the developed software met the specified requirements or not and to identify the defects to ensure that the product is defect free..."/>
                    </div>
                    </div>
                </div>
                {/* Site content */}
                <SiteSection smallTit="Habits" Title="Photography" content="You dont always need a plan. Sometimes you just need to breathe, trust, let go and see what happens" vietContent = "Bạn không phải lúc nào cũng cần có một kế hoạch. Đôi khi bạn chỉ cần thở, tin tưởng, buông tay và xem điều gì xảy ra" image ="images/gallery/habit1.jpg" style ="ml-lg-auto" block="" right=""/>
                <SiteSection smallTit="Habits" Title= "Reading" content="I’m not looking for someone who has everything, but someone who has time to spend with me more than anything" vietContent="Tôi không tìm kiếm một người có tất cả mọi thứ, nhưng là một người có thời gian dành cho tôi hơn bất cứ điều gì" image ="images/gallery/habit3.jpg" style ="mr-lg-auto" block=" block" right=" right"/>

                <div class="site-section ">{/*Site Section*/}
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
                </div>{/*End of Site Section*/}
            </div> 
        );
    }
}

export default Home;