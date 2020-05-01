import React from 'react';
import BookConsult from './BookConsult';
import Header from './Header';
import Loading from './Loading';
import Footer from './Footer';
import { withRouter } from "react-router-dom";

class Home extends React.Component {

 constructor(props){
     super(props)
     this.state = {
        showModal: false
     }
     this.toggleModal = this.toggleModal.bind(this)
     this.closeModal = this.closeModal.bind(this)
 }

 toggleModal() {
    this.setState({showModal:true})
 }

 closeModal() {
    this.setState({showModal:false})
 }

 render() {
     
  return (
    <>
    <Header />
    <Loading />
    <div className="Home" id="home">
        
    <div id="rev_slider_15_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="seo-2" data-source="gallery" style={{ margin:'0 auto', backgroundColor:'transparent', padding: '0', marginTop: '0', marginBottom: '0',}}>
        <div id="rev_slider_15_1" className="rev_slider fullwidthabanner" style={{ display: 'none' }} data-version="5.3.0.2.1">
                <ul>

                {/*<li data-index="rs-50" data-transition="random-static,random-premium,random" data-slotamount="default,default,default,default" data-hideafterloop="0" data-hideslideonmobile="off" data-randomtransition="on" data-easein="default,default,default,default" data-easeout="default,default,default,default" data-masterspeed="default,default,default,default" data-thumb="images/slides/thumb-dealerplus.jpg" data-rotate="0,0,0,0" data-saveperformance="off" data-title="Slide">
                    
                    <img src="images/slides/dealerplus.jpg" alt="Hosting Solution" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                        
                    <div className="tp-caption tp-resizeme largewhitebg" id="slide-49-layer-7" data-x="center" data-y="center" data-voffset="-80" data-width="['auto']" data-height="['auto']" data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]' ><h2 style={{color:'#F0FFFF', textShadow:"2px 2px 4px rgba(0, 0, 0, .5)"}}>TRABALHA COM REVENDA DE AUTOMÓVEIS?</h2></div>

                    <div className="tp-caption tp-resizeme largewhitebg" id="slide-49-layer-7" data-x="center" data-y="center" data-voffset="-40" data-width="['auto']" data-height="['auto']" data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]' ><h3 style={{color:'#F0FFFF', textShadow:"2px 2px 4px rgba(0, 0, 0, .5)"}}>TENHA SEU ESTOQUE ONLINE AINDA HOJE</h3></div>
                    
                    <div className="tp-caption tp-resizeme button rev-left-slide-btn" id="slide-49-layer-8" data-x="center" data-y="center" data-voffset="25" data-width="['auto']" data-height="['auto']" data-type="button" data-responsive_offset="on" data-frames='[{"delay":2500,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]' data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[12,12,12,12]" data-paddingright="[35,35,35,35]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[35,35,35,35]" style={{ cursor: 'pointer', boxShadow:"2px 2px 4px rgba(0, 0, 0, .5)"}}><h3 className="text-white">SAIBA COMO</h3></div>
                </li>*/}

                <li data-index="rs-49" data-transition="random-static,random-premium,random" data-slotamount="default,default,default,default" data-hideafterloop="0" data-hideslideonmobile="off" data-randomtransition="on" data-easein="default,default,default,default" data-easeout="default,default,default,default" data-masterspeed="default,default,default,default" data-thumb="images/slides/thumb-video-consulting.jpg" data-rotate="0,0,0,0" data-saveperformance="off" data-title="Slide">

                    <div className="rs-background-video-layer" data-type="video" data-videomp4="images/slides/video-consulting.mp4" data-videopreload="auto" data-videocontrols="none" data-volume="mute" data-forcerewind="on" data-nextslideatend="true" data-videoloop="loopandnoslidestop" data-autoplay="on"></div>       
                    
                    <div className="tp-caption tp-resizeme largewhitebg" id="slide-49-layer-7" data-x="center" data-y="center" data-voffset="-80" data-width="['auto']" data-height="['auto']" data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":310,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' ><h2 className="text-light">SOLUCOES NA MEDIDA DO SEU PROJETO</h2></div>

                    <div className="tp-caption tp-resizeme largewhitebg" id="slide-49-layer-7" data-x="center" data-y="center" data-voffset="-40" data-width="['auto']" data-height="['auto']" data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":310,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' ><h3 className="text-light">TIRES SUAS DÚVIDAS COM NOSSA CONSULTORIA</h3></div>
                    
                    <div className="tp-caption tp-resizeme button rev-left-slide-btn" id="slide-49-layer-8" data-x="center" data-y="center" data-voffset="25" data-width="['auto']" data-height="['auto']" data-type="button" data-responsive_offset="on" data-frames='[{"delay":2500,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":310,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[12,12,12,12]" data-paddingright="[35,35,35,35]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[35,35,35,35]" style={{ cursor: 'pointer'}}><h3 className="text-white"><a onClick={this.toggleModal}>AGENDAR AGORA MESMO</a></h3></div>
                </li>
                
                {/*<li data-index="rs-51" data-transition="random-static,random-premium,random" data-slotamount="default,default,default,default" data-hideafterloop="0" data-hideslideonmobile="off" data-randomtransition="on" data-easein="default,default,default,default" data-easeout="default,default,default,default" data-masterspeed="default,default,default,default" data-thumb="images/slides/thumb-unionplus.jpg" data-rotate="0,0,0,0" data-saveperformance="off" data-title="Slide">
                    
                    <img src="images/slides/unionplus.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
                     
                    <div className="tp-caption tp-resizeme largewhitebg" id="slide-49-layer-7" data-x="center" data-y="center" data-voffset="-80" data-width="['auto']" data-height="['auto']" data-frames='[{"delay":2500,"speed":1000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":310,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' ><h2 style={{color:'#F0FFFF', textShadow:"2px 2px 4px rgba(0, 0, 0, .5)"}}>SISTEMA DE ASSOCIAÇÕES E SINDICATOS</h2></div>

                    <div className="tp-caption tp-resizeme largewhitebg" id="slide-49-layer-7" data-x="center" data-y="center" data-voffset="-40" data-width="['auto']" data-height="['auto']" data-frames='[{"delay":3000,"speed":1000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":310,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' ><h3 style={{color:'#F0FFFF', textShadow:"2px 2px 4px rgba(0, 0, 0, .5)"}}>GERENCIE ASSOCIADOS, PARCEIROS E CONVÊNIOS</h3></div>
                    
                    <div className="tp-caption tp-resizeme button rev-left-slide-btn" id="slide-49-layer-8" data-x="center" data-y="center" data-voffset="25" data-width="['auto']" data-height="['auto']" data-type="button" data-responsive_offset="on" data-frames='[{"delay":3500,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":310,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[12,12,12,12]" data-paddingright="[35,35,35,35]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[35,35,35,35]" style={{ cursor: 'pointer'}}><h3 className="text-white">TESTE AGORA MESMO</h3></div>
            </li>*/}
            </ul>
            <div className="tp-bannertimer tp-bottom" style={{visibility: 'hidden !important'}}></div>
        </div>
    </div>

    <section className="newsletter blue-bg page-section-pb">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 text-center">
                    <div className="newsletter-info">
                        <h2 className="text-white mb-3">TEM UM PROBLEMA ENVOLVENDO TECNOLOGIA?</h2>
                        <h3 className="mb-3">Ganhe uma consulta gratuita</h3>
                        <h4 className="mb-4 text-white">Clique no botão abaixo e agende seu horário</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                            <div className="form-group">
                                <button className="button border-white" onClick={this.toggleModal}><h3>Agendar um horário agora mesmo</h3></button>
                            </div>
                        </div>
                    </div>
                    <BookConsult show={this.state.showModal} onHide={this.closeModal} onClick={this.closeModal}/>
                </div>
            </div>
        </div>
    </section>


    <section className="welcome-01 page-section-ptb" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12 ">
                    <div className="section-title text-center">
                        <span>Nossos Serviços</span>
                        <h3 className="text-center">Na medida que sua empresa precisa</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-box-01 text-center mb-5">
                        <div className="feature-box-img mb-2">
                            <img className="img-fluid" src="images/icon/04.png" alt=""/>
                        </div>
                        <div className="feature-box-info mt-2">
                            <h5 className="mb-2 mt-4">Web e Mobile</h5>
                            <p className="text-justify">Desenvolvimento de websites institucionais e apps de acordo com o seu projeto, utilizando as melhores tecnologias do mercado, desde a concepção do design até a entrega e lançamento.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-box-01 text-center mb-5">
                        <div className="feature-box-img mb-2">
                            <img className="img-fluid" src="images/icon/05.png" alt=""/>
                        </div>
                        <div className="feature-box-info mt-2">
                            <h5 className="mb-2 mt-4">Sales Funnels</h5>
                            <p className="text-justify">Se você quer vender algo pela internet, seja um produto físico ou digital, somos especialistas em desenvolver todo o processo de vendas que pode incluir Landing Pages, integrações com Gateways de Pagamento e outras ferramentas do zero.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-box-01 text-center mb-5">
                        <div className="feature-box-img mb-2">
                            <img className="img-fluid" src="images/icon/18.png" alt=""/>
                        </div>
                        <div className="feature-box-info mt-2">
                            <h5 className="mb-2 mt-4">Consultoria</h5>
                            <p className="text-justify">Se o seu objetivo é obter melhores direcionamentos para soluções de problemas que envolvam tecnologia, veio ao lugar certo. Prestamos consultoria com acompanhamento visando alcançar seus resultados mais rapidamente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


<section className="our-story popup-gallery bg" style={{ background: 'url(images/bg/back-about.jpg)' }} id="about-us">
        <div className="container-fluid">
            <div className="row no-gutter text-center">
                <div className="col-lg-6 col-md-12 align-self-center">
                    <div className="play-video">
                        <a className="popup-youtube" href={void(0)}> <span className="ti-control-play"></span> </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="our-story-content text-left blue-bg">
                        <h2 className="text-white mb-2">um pouco sobre nós</h2>
                        <span className="mb-2 text-white">Criada para trazer resultados expressivos.</span>
                        <p className="mb-2 text-white">A MzTech foi criada pensando em fornecer o melhor da tecnologia no menor custo possível. Sendo assim, nossa missão é concluir nossos projetos e cumprir nossos contratos com o máximo de eficiência possível.
                            <br />
                            <br /> Além disso, fornecemos toda a segurança necessária para empreendedores focarem mais em seus negócios, e deixarem a tecnologia necessária para a mágica acontecer conosco.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="testimonial page-section-ptb blue-bg" id="clients">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="section-title text-center">
                        <span className="text-white">Com quem já fizemos projetos?</span>
                        <h3 className="text-center text-white">O que nossos parceiros falam</h3>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12  testimonial-bg">
                    <div className="testimonial-bg-inner">
                        <div className="owl-carousel" data-nav-dots="false" data-nav-arrow="true" data-items="1" data-sm-items="1" data-lg-items="1" data-md-items="1" data-autoplay="false" data-loop="true">
                            <div className="item">
                                <div className="testimonial-01 text-center">
                                    <div className="testimonial-avtar mb-3">
                                        <img className="img-fluid center-block" src="images/testimonials/partner1.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-info">
                                        <h5 className="text-blue mb-3">Isvaldir Lomba Jr.<span className="text-black">Chefe de T.I - Serviço Autônomo de Água e Esgoto de Três Rios</span><a href="https://www.saaetri.com.br" target="_blank" rel="noopener noreferrer">www.saaetri.com.br</a></h5>
                                        <p className="text-justify">Ao assumir o Departamento de TI da Autarquia nosso suporte ainda estava focada na solução de problemas já acontecidos, conseguimos mudar para além da solução de problemas efetivando a contratação da MzTech, especializada no serviço de manutenção de TI para auxiliar nas questões pertinentes ao Departamento.
Atualmente trabalhamos, acima de tudo, com a prevenção e previsão de situações adversas, nos permitindo diminuir consideravelmente os riscos e solucionar rapidamente situações do dia a dia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-01 text-center">
                                    <div className="testimonial-avtar mb-3">
                                        <img className="img-fluid center-block" src="images/testimonials/partner2.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-info">
                                        <h5 className="text-blue mb-3">Dr. Jonatan Bandeira<span className="text-black">Master Coach e Fonoaudiólogo</span><a href="https://www.jonatanbandeira.com.br" target="_blank" rel="noopener noreferrer">www.jonatanbandeira.com.br</a></h5>
                                        <p className="text-justify">Acredito que o grande diferencial da empresa seja possuir o capital humano tão responsável, compromissado com o tempo na gestão dos projetos, além da visão empreendedora na hora de criar não simplesmente sítios on-line, mas máquinas de vendas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-01 text-center">
                                    <div className="testimonial-avtar mb-3">
                                        <img className="img-fluid center-block" src="images/testimonials/partner3.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-info">
                                        <h5 className="text-blue mb-3">Ricardo Webster<span className="text-black">Presidente do Sindicato dos Servidores Públicos Municipais de Três Rios</span><a href="https://sspmtr.org.br" target="_blank" rel="noopener noreferrer">www.sspmtr.org.br</a></h5>
                                        <p className="text-justify">Para todas as empresas é fundamental termos não prestadores de serviço, mas sim parceiros. Temos a satisfação de sermos parceiros da empresa..... que sempre nos atende e muitas das vezes vai além das nossas expectativas. Um relacionamento que vai muito além de simples atendimento. Hoje estamos buscando empresas que se inovem e disponibilizem ferramentas que gerem “facilidades” para os clientes e para nossos Sindicalizados. E por estes motivos somos parceiros da empresa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="our-clients blue-bg">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="owl-carousel" data-items="5" data-lg-items="4" data-md-items="3" data-sm-items="2" data-space="0" data-loop="true">
                        <div className="item">
                            <img className="img-fluid center-block" src="images/clients/01.png" alt=""/>
                        </div>
                        <div className="item">
                            <img className="img-fluid center-block" src="images/clients/02.png" alt=""/>
                        </div>
                        <div className="item">
                            <img className="img-fluid center-block" src="images/clients/03.png" alt=""/>
                        </div>
                        <div className="item">
                            <img className="img-fluid center-block" src="images/clients/04.png" alt=""/>
                        </div>
                        <div className="item">
                            <img className="img-fluid center-block" src="images/clients/05.png" alt=""/>
                        </div>
                        <div className="item">
                            <img className="img-fluid center-block" src="images/clients/06.png" alt=""/>
                        </div>
                        <div className="item">
                            <img className="img-fluid center-block" src="images/clients/02.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="back-to-top">
        <span><img src="images/_uparrow.png" data-src="images/_uparrow.png" data-hover="images/_uparrow.png" alt=""/></span>
    </div>
  
   </div>
   <Footer />
   </>
  );
 }
}

export default withRouter(Home);
