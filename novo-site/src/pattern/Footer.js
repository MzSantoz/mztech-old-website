import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer light footer-topbar page-section-pt">
        <div className="container">
            <div className="footer-contact white-bg">
                <div className="row">
                    <div className="col-md-4 bottom-m3">
                        <div className="contact-box">
                            <div className="contact-icon">
                                <i className="ti-direction-alt"></i>
                            </div>
                            <div className="contact-info">
                                <div className="text-center">
                                    <h5 className="mt-1 mb-1">25, King St. 20170</h5>
                                    <span>Melbourne Australia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bottom-m3">
                        <div className="contact-box">
                            <div className="contact-icon">
                                <i className="ti-headphone-alt"></i>
                            </div>
                            <div className="contact-info">
                                <div className="text-center">
                                    <h5 className="mt-1 mb-1">0011 234 56789</h5>
                                    <span>Mon-Fri 8:30am-6:30pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-box">
                            <div className="contact-icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="contact-info">
                                <div className="text-center">
                                    <h5 className="mt-1 mb-1">info@yoursite.com</h5>
                                    <span>24 X 7 online support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row top">
                <div className="col-lg-3 col-md-2">
                    <img className="img-fluid"  id="logo-footer"  src="images/logo-dark.png" alt=""/>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="footer-nav text-right">
                        <ul>
                            <li><a href="index-1.html">Home</a></li>
                            <li><a href="about-01.html">About us</a></li>
                            <li><a href="service-list-01.html">Service</a></li>
                            <li><a href="blog-right-sidebar.html">Blog</a></li>
                            <li><a href="contact-single-office.html">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="social text-right">
                        <ul>
                            <li>
                                <a href="#"> <i className="fa fa-facebook"></i> </a>
                            </li>
                            <li>
                                <a href="#"> <i className="fa fa-twitter"></i> </a>
                            </li>
                            <li>
                                <a href="#"> <i className="fa fa-pinterest-p"></i> </a>
                            </li>
                            <li>
                                <a href="#"> <i className="fa fa-dribbble"></i> </a>
                            </li>
                            <li>
                                <a href="#"> <i className="fa fa-vimeo"></i> </a>
                            </li>
                            <li>
                                <a href="#"> <i className="fa fa-linkedin"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="about-content">
                        <h6 className="mb-2">about us</h6>
                        <p>We attract your potential buyers from search and turn them intoyour customers. Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis eleifend option. sed diam nonummy nibham liber tempor cum soluta nobis eleifend option.</p>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <h6 className="mb-2">Usefull Links</h6>
                    <div className="usefull-link">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> SEO Services </a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Social Media</a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Web Analytics</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Web Development </a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Content Management</a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Blog Management</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Virtual Marketing </a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Email Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fa fa-angle-right"></i> Keyword Analytics </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <ul className="list-inline text-left">
                           <li><a href="#">Terms & Conditions </a> &nbsp;&nbsp;&nbsp;|</li>
                           <li><a href="#">API Use Policy </a> &nbsp;&nbsp;&nbsp;|</li>
                           <li><a href="#">Privacy Policy </a> &nbsp;&nbsp;&nbsp;|</li>
                           <li><a href="#">Cookies </a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="text-right">
                            <p>Copyright © 2017 MzTech - Segurança e Tecnologia. Todos os Direitos Reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

        );
    }
}
export default Footer;