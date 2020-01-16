import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="header" className="topbar-dark">
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="topbar-left text-center text-md-left">
                            <ul className="list-inline">
                                <li> <i className="ti-location-pin"> </i> Três Rios, Rio de Janeiro</li>
                                <li> <i className="ti-headphone-alt"></i>+55 24 992635002</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="topbar-right text-center text-md-right">
                            <ul className="list-inline">
                                <li><a href="#"> Check your rankings anytime anywhere </a> </li>
                                <li><a href="#"> Register for FREE!</a></li>
                                <li><a href="#"> Support & FAQ</a></li>
                                <li><a href="#">Login </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="menu">
            
            <nav id="menu" className="mega-menu">
                
                <section className="menu-list-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                               
                                <ul className="menu-logo">
                                    <li>
                                        <a href="#"><img id="logo_img" src="images/mztech.png" alt="logo"/> </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-10">
                                <div className="header-info pull-right">
                                    <ul>
                                        <li>
                                            <div className="info-box">
                                                <div className="info-icon">
                                                    <span className="ti-direction-alt"></span>
                                                </div>
                                                <div className="info-content">
                                                    <h6>25, King St. 20170</h6>
                                                    <p>Melbourne Australia</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-box">
                                                <div className="info-icon">
                                                    <span className="ti-headphone-alt"></span>
                                                </div>
                                                <div className="info-content">
                                                    <h6>0011 234 56789</h6>
                                                    <p>Mon-Fri 8:30am-6:30pm</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-box">
                                                <div className="info-icon">
                                                    <span className="ti-layout-placeholder"></span>
                                                </div>
                                                <div className="info-content">
                                                    <h6>info@yoursite.com</h6>
                                                    <p>24 X 7 online support</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                
                                <ul className="menu-links">

                                    <li className="active"><a href="#">Home</a></li>

                                    <li><a href="javascript:void(0)">Sistemas <i className="fa fa-angle-down fa-indicator"></i></a>

                                        <div className="drop-down menu-bg grid-col-12">
                                            
                                            <div className="grid-row">
                                                
                                                <div className="grid-col-3">
                                                    <h4>pages</h4>
													<ul>
                                                        <li><a href="about-01.html">About us 01 </a></li>
                                                        <li><a href="about-02.html">About us 02</a></li>
                                                        <li><a href="faq.html">faq</a></li>
                                                        <li><a href="login.html">login</a></li>
                                                        <li><a href="register.html">register</a></li>
                                                        <li><a href="our-clients.html">our clients</a></li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="grid-col-3">
                                                    <h4>pages</h4>
													<ul>
                                                        <li><a href="team.html">team</a></li>
                                                        <li><a href="team-single.html">team single</a></li>
                                                        <li><a href="error-404.html">error 404</a></li>
                                                        <li><a href="contact-single-office.html">contact single offices</a></li>
                                                        <li><a href="contact-multiple-offices.html">contact multiple offices</a></li>
                                                        <li><a href="free-seo-analysis.html">free-seo-analysis</a></li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="grid-col-3">
                                                    <h4>elements</h4>
													<ul>
                                                        <li><a href="under-constraction.html">Under constraction</a></li>
                                                        <li><a href="accordion.html">Accordion</a></li>
                                                        <li><a href="typography.html">Typography</a></li>
                                                        <li><a href="buttons.html">Buttons</a></li>
                                                        <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                                        <li><a href="tab.html">Tab</a></li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="grid-col-3">
                                                    <h4>page title</h4>
													<ul>
                                                        <li><a href="page-title-image.html">page title image</a></li>
                                                        <li><a href="page-title-dark-image.html">page title dark image</a></li>
                                                        <li><a href="page-title-dark.html">page title dark</a></li>
                                                        <li><a href="page-title-light.html">page title light</a></li>
                                                        <li><a href="page-title-fixed.html">page title fixed</a></li>
                                                        <li><a href="page-title-parallax.html">page title parallax</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li><a href="javascript:void(0)">Serviços <i className="fa fa-angle-down fa-indicator"></i></a>

                                        <ul className="drop-down-multilevel">
                                            <li><a href="case-studies-2-columns.html">case studies 2 columns</a></li>
                                            <li><a href="case-studies-3-columns.html">case studies 3 columns</a></li>
                                            <li><a href="case-studies-4-columns.html">case studies 4 columns</a></li>
                                            <li><a href="case-studies-filter.html">case studies filter</a></li>
                                            <li><a href="case-studies-full-screen.html">case studies full screen</a></li>
                                            <li><a href="case-studies-single.html">case studies single</a></li>
                                        </ul>
                                    </li>
                                                                       
                                    <li><a href="#"> Consultoria</a></li>
                                    
                                    <li><a href="#"> Sobre</a></li>

                                    <li><a href="#">Blog </a></li>

									<li><a href="#"> Contato </a>

                                        <ul className="drop-down-multilevel">
                                            <li><a href="contact-single-office.html">contact single office </a></li>
                                            <li><a href="contact-multiple-offices.html">contact multiple offices</a></li>
                                            <li><a href="free-seo-analysis.html">free seo analysis</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div className="nav-add pull-right">
                                    <ul>
                                        <li>
                                            <div className="search-button">
                                                <a className="search-trigger" href="#search"> <span></span></a>
                                            </div>
                                        </li>
                                        <li className="side-menu-main">
                                            <div className="side-menu">
                                                <div className="mobile-nav-button">
                                                    <div className="mobile-nav-button-line"></div>
                                                    <div className="mobile-nav-button-line"></div>
                                                    <div className="mobile-nav-button-line"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
 
        </section>
        </nav>

        </div>
    </header>

        );
    }
}
export default Header;