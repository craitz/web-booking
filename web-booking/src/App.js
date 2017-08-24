import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mainframe from './Mainframe';
import Home from './Home';
import Reservas from './Reservas';
import Historico from './Historico';
import Configuracoes from './Configuracoes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Mainframe>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/reservas" component={Reservas} />
              <Route exact path="/historico" component={Historico} />
              <Route exact path="/configuracoes" component={Configuracoes} />
            </Switch>
          </Mainframe>
        </Router>
      </div>
    );
  }
}

export default App;
