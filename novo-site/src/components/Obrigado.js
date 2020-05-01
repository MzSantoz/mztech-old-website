import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

class Obrigado extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: true
        }
        this.returnHomePage = this.returnHomePage.bind(this)
    }


    returnHomePage() {
        this.setState({
            show: false
        })
        const link = "https://mztech.com.br"
        window.location.assign(link)
    }
    render(){
        return(
            <>
            <Modal size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            show={this.state.show}
            onHide={this.returnHomePage}
            >       
                    <ModalBody>
                        <div className='text-center'>
                            <h3>Tudo certo!</h3>
                                <h4>Em breve vamos entrar em contato com você</h4><br/>
                                    <img id="logo_img" src="images/mztech.png" alt="logo" width="100%"/>
                            <h5>Agradecemos muito seu interesse!</h5>
                        </div>
                    </ModalBody>
                    <ModalFooter>
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
                        <span onClick={this.returnHomePage}><i className="ti-close"></i></span>
                    </ModalFooter>
            </Modal>
          </>
        )
    }
}
export default Obrigado;