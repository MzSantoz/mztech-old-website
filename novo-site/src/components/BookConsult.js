import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';


class BookConsult extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fnameValue: '',
            emailValue: '',
            phoneValue: '',
        }
    }

render() {
        return(
            <>
            <Modal size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            show={this.props.show}
            onHide={this.props.onHide}
            >       
                    <ModalBody>
                        <div className='text-center'>
                            <h3>Ops.. nossas vagas esgotaram.</h3>
                            <h4>Mas fique tranquilo!</h4><br/>
                            <h6>Deixe seu contato preenchendo os campos abaixo, e assim que abrirmos novas vagas entraremos em contato com você.</h6>
                        </div>
                        <Form action="https://mztech.us8.list-manage.com/subscribe/post" method="POST" noValidate>
                            <Form.Control name="u" type="hidden" value="a6044c7872e4946a687f40435" />
                            <Form.Control name="id" type="hidden" value="dd68c08370"/>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Seu nome</Form.Label>
                                <Form.Control required name="FNAME" type="text" placeholder="Digite seu nome" value={this.state.fnameValue} 
                        onChange={ (e)=>{this.setState({fnameValue: e.target.value});} }/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Seu melhor e-mail</Form.Label>
                                <Form.Control required name="EMAIL" type="email" placeholder="Digite seu e-mail" value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} }/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Seu telefone</Form.Label>
                                <Form.Control type="text" name="MMERGE6" placeholder="(xx) xxxxx - xxxx" value={this.state.phoneValue} 
                        onChange={ (e)=>{this.setState({phoneValue: e.target.value});} }/>
                            </Form.Group>

                            <Form.Group>
                            <Form.Text className="text-muted text-right">
                                
                            </Form.Text>
                            </Form.Group>
                            
                            <Form.Group>
                            <Button col="12" size="lg" type="submit" name="subscribe" value="Subscribe" id="mc-embedded-subscribe" className="button center">
                                <i className="ti-arrow-circle-down"> </i>Quero reservar minha vaga!
                            </Button>
                            </Form.Group>
                        </Form>
                    </ModalBody>

                    <ModalFooter>
                        <span className="text-left">Fique tranquilo, nós não enviamos SPAM.</span>
                        <span onClick={this.props.onClick}><i className="ti-close"></i></span>
                    </ModalFooter>
            </Modal>
          </>
      );
    }
}
export default BookConsult;