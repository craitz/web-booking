import React, { Component } from 'react';
import Home from './Home';
import Reservas from './Reservas';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import Button from 'react-toolbox/lib/button/Button';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListDivider from 'react-toolbox/lib/list/ListDivider';
import ListCheckbox from 'react-toolbox/lib/list/ListCheckbox';
import logo from './logo.svg';
import belinha from './styles/images/profile.jpg';
import './App.css';

class MainFrame extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
    this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleReservas = this.handleReservas.bind(this);
    this.state = {
      drawerActive: false,
      drawerPinned: false,
      sidebarPinned: false
    };
  }

  toggleDrawerActive() {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned() {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  }

  toggleSidebar() {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  handleReservas(e) {
    e.preventDefault();
    this.props.history.push('/reservas');
  }

  render() {
    const UserFrame = () => {
      return (
        <div className="user-frame">
          <Avatar 
            title="Usuário logado" 
            image={belinha} 
            className="user-avatar"
          />
          <div className="user-name">Belinelson</div>
          <div className="user-email">belinelson@webbooking.com</div>
          <div className="action-section">
            <Button
              label="Perfil"
              icon="person"
              className="button-left"
              raised
              primary
            />
            <Button
              label="Logout"
              icon="power_settings_new"
              className="button-right"
              raised
              accent
            />
          </div>
        </div>
      );
    }

    const ListTest = () => (
      <List selectable ripple>
        {/* <ListSubHeader caption='Menu do sistema' /> */}
        <ListItem
          avatar={<Avatar icon="home" />}
          caption='Home'
          legend='Ir para página inicial'
        />
        <ListItem
          avatar={<Avatar icon="bookmark" />}
          caption='Reservas'
          legend="Fazer reserva"
        />
        <ListItem
          avatar={<Avatar icon="history" />}
          caption='Histórico'
          legend='Lista de reservas'
        />
        <ListItem
          avatar={<Avatar icon="code" />}
          caption='Código'
          legend='Veja o código-fonte'
        />
        <ListDivider />
        <ListItem
          avatar={<Avatar icon="settings" />}
          caption='Configurações'
          legend='Ajustes do sistema'
        />
        <ListItem
            avatar={<Avatar icon="directions_bus" />}
            caption='BusTicket'
            legend='Passagens de ônibus'
        />
      </List>
    );

    const MenuFrame = () => {
      return (
        <div className="menu-frame">
          <ListTest/>
        </div>        
      );
    }

    return (
      <Layout>
        <NavDrawer 
          active={this.state.drawerActive}
          permanentAt="lg"
          pinned={this.state.drawerPinned} 
          onOverlayClick={this.toggleDrawerActive}
          width='wide'
        >
          <UserFrame/>
          <MenuFrame/>
        </NavDrawer>
        <Panel>
          <AppBar
            title="Web Booking"
            leftIcon="import_contacts"
            className="main-nav"
            scrollHide={true}
          >
            <Button
              icon="code"
              accent
              floating
              className="main-menu-button"
              onClick={this.toggleDrawerActive}
            />
            <Navigation type="horizontal" className="nav-options">
              <Link href="#" label='Home' icon="home" />
              <Link href="#" label='Reservas' icon="bookmark" onClick={this.handleReservas}/>
              <Link href="#" label="Histórico" icon="history" />
              <Link href="#" label="Código-fonte" icon="share" />
            </Navigation>
            <Navigation type="horizontal" className="nav-settings">
              <Link href="http://"label="Sair" icon="power_settings_new" />
            </Navigation>
          </AppBar>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            {this.props.children}
          </div>
        </Panel>
        <Sidebar pinned={this.state.sidebarPinned} width={5}>
          <div><IconButton icon='close' onClick={this.toggleSidebar} /></div>
          <div style={{ flex: 1 }}>
            <p>Supplemental content goes here.</p>
          </div>
        </Sidebar>
      </Layout>
    );
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <MainFrame>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/reservas" component={Reservas} />
              </Switch>
            </MainFrame>
          </Router>
        </div>
    );
  }
}

export default App;
