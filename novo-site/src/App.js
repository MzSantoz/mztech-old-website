import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Obrigado from './components/Obrigado';


class App extends Component {
  constructor(props){
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
      const { location } = this.props;
      const isModal = (
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
      );

    return (
      <div className="app">
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/obrigado"><Obrigado isModal={isModal}/></Route>
        </Switch>
        {isModal
          ? <Route exact path="/obrigado"><Obrigado isModal={isModal}/></Route>
          : null
        }
      </div>
    );
  }
}

export default withRouter(App);
