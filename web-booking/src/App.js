import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import Button from 'react-toolbox/lib/button/Button';
import logo from './logo.svg';
import './App.css';

const MainNav = () => (
  <AppBar
    title="Web Booking"
    leftIcon="import_contacts"
    className="main-nav"
    scrollHide={true}
  >
    <Navigation type="horizontal">
      <Link href="http://" label='Reservas' icon="bookmark" />
      <Link href="http://" label="Histórico" icon="history" />
      <Link href="http://" label="Código-fonte" icon="share" />
    </Navigation>
  </AppBar>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.state = {
      drawerOpen: false
    }
  }

  handleDrawerToggle(event) {
    console.log(event);
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  handleRequestChange(open) {
    this.setState({
      drawerOpen: open
    });
  }

  render() {
    return (
      <div className="App">
        <MainNav />
        <div className="main-content">
          <div className="content-header">
            <span>Olá, seja bem-vindo!</span>
            <Button
              icon="code"
              accent
              floating
              className="main-menu-button"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
