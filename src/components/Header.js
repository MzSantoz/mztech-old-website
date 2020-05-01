import React from 'react';
import { Link } from 'react-scroll';

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
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="topbar-right text-center text-md-right">
                            <ul className="list-inline">
                                <li><a href={void(0)}><i className="ti-user"></i> Área do Cliente</a></li>
                                <li><a href={void(0)}><i className="ti-comment-alt"></i> Wiki </a></li>
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
                                        <a href="https://mztech.com.br"><img id="logo_img" src="images/mztech.png" alt="logo"/> </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-10">
                                <div className="header-info pull-right">
                                    <ul>
                                        <li>
                                            <div className="info-box">
                                                <div className="info-content">
                                                    <h6><a href="mailto:contato@mztech.com.br"><i className="ti-email"></i> contato@mztech.com.br</a></h6>
                                                    <p>Atendimento Online 24hrs por dia</p>
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

                                    <li><a href={void(0)}>Apps <i className="fa fa-angle-down fa-indicator"></i></a>

                                        <div className="drop-down menu-bg grid-col-4">
                                            
                                            <div className="grid-row">
                                                
                                                <div className="grid-col">
													<ul>
                                                        <li><a href={void(0)}><i className="ti-car"></i> Dealy | Revendas de Automóveis (Em breve)</a></li>
                                                        <li><a href={void(0)}><i className="ti-home"></i> Syndical | Sindicatos e Associações (Em breve)</a></li>
                                                    </ul>
                                                </div>      
                                            </div>
                                        </div>
                                    </li>

                                    <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>Serviços</Link></li>
                                    
                                    <li><Link activeClass="active" to="about-us" spy={true} smooth={true} offset={-70} duration={500}>Sobre</Link></li>

                                    <li><Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500}>Cases </Link></li>

									<li><Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} onClick={() => window.purechatApi.set('chatbox.expanded', true)}>Contato </Link></li>
                                    
                                </ul>
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