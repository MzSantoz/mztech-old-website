import React from 'react';

class Footer extends React.Component {
    render() {
        let date = new Date()
        date = date.getFullYear()
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
                                    <h5 className="mt-1 mb-1">Três Rios, Rio de Janeiro</h5>
                                    <span>Equipe 100% Remota</span>
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
                                    <h5 className="mt-1 mb-1"><a href={void(0)} onClick={() => window.purechatApi.set('chatbox.expanded', true)}>Fale Conosco</a></h5>
                                    <span>Seg-Sex 9:00am-18:00pm</span>
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
                                    <h5 className="mt-1 mb-1"><a href="mailto:contato@mztech.com.br">contato@mztech.com.br</a></h5>
                                    <span>Envie uma mensagem por e-mail</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row top">
                <div className="col-md-12">
                    <div className="social">
                        <h6>Siga nossas redes</h6>
                        <ul>
                            <li>
                                <a href="https://facebook.com/mztechtr" target="_blank" rel="noopener noreferrer"> <i className="fa fa-facebook"></i> </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/mztech.tr" target="_blank" rel="noopener noreferrer"> <i className="fa fa-instagram"></i> </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/mztechtr/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <ul className="list-inline text-left">
                           <li><a href={void(0)}>Trabalhe Conosco </a> &nbsp;&nbsp;&nbsp;|</li>
                           <li><a href={void(0)}>Política de Privacidade </a> &nbsp;&nbsp;&nbsp;|</li>
                           <li><a href={void(0)}>Política de Cookies </a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="text-right">
                            <p>Copyright © {date} <a href="https://mztech.com.br">MzTech - Segurança e Tecnologia</a>. Todos os Direitos Reservados.</p>
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