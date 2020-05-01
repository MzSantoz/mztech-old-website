import React from 'react';
import Loading from './Loading';
import Footer from './Footer';

class NotFound extends React.Component{

    takeMeBack() {
        const url = "https://mztech.com.br"
        window.location.assign(url)
    }
    render(){
        return(
         <>
           <Loading />
            <section className="page-section-ptb">
                    <div className="container" style={{ marginBottom: '80px', marginTop: '-100px'}}>
                                <div className="col-md-12 text-center">
                                    <img className="img-fluid center-block mb-5" src="images/404.png" alt=""/>
                                    <h3 className="mb-2">Não encontramos essa página!</h3>
                                    <div className="error-info">
                                        <p className="mb-5">Ela pode não existir ou estar temporariamente indisponível.</p>
                                        <button className="button" onClick={this.takeMeBack}>Me leve de volta!</button>
                                    </div>
                                </div>
                        </div>
            </section>
          <Footer />
         </>
        );
    }
}
export default NotFound;