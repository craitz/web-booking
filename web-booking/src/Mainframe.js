import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
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
import belinha from './styles/images/profile3.jpg';

class Mainframe extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
    this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleReservas = this.handleReservas.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleHistorico = this.handleHistorico.bind(this);
    this.handleConfiguracoes = this.handleConfiguracoes.bind(this);
    this.handleBusTicket = this.handleBusTicket.bind(this);
    this.handleCodigoFonte = this.handleCodigoFonte.bind(this);
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
    this.setState({ drawerActive: false });
  }

  handleHome(e) {
    e.preventDefault();
    this.props.history.push('/');
    this.setState({ drawerActive: false });
  }

  handleHistorico(e) {
    e.preventDefault();
    this.props.history.push('/historico');
    this.setState({ drawerActive: false });
  }

  handleConfiguracoes(e) {
    e.preventDefault();
    this.props.history.push('/configuracoes');
    this.setState({ drawerActive: false });
  }

  handleCodigoFonte(e) {
    e.preventDefault();
    const win = window.open("https://github.com/craitz/web-booking", "_blank");
    win.focus();
    this.setState({ drawerActive: false });
  }

  handleBusTicket(e) {
    e.preventDefault();
    const win = window.open("https://react-busticket.netlify.com", "_blank");
    win.focus();
    this.setState({ drawerActive: false });
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
          <div className="user-name">Guest</div>
          <div className="user-email">guest@webbooking.com</div>
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
        <ListItem
          avatar={<Avatar icon="home" />}
          caption='Home'
          legend='Ir para página inicial'
          onClick={this.handleHome}
        />
        <ListItem
          avatar={<Avatar icon="weekend" />}
          caption='Reservas'
          legend="Fazer reserva"
          onClick={this.handleReservas}
        />
        <ListItem
          avatar={<Avatar icon="history" />}
          caption='Histórico'
          legend='Lista de reservas'
          onClick={this.handleHistorico}
        />
        <ListItem
          avatar={<Avatar icon="code" />}
          caption='Código'
          legend='Veja o código-fonte'
          onClick={this.handleCodigoFonte}
        />
        <ListDivider />
        <ListItem
          avatar={<Avatar icon="settings" />}
          caption='Configurações'
          legend='Ajustes do sistema'
          onClick={this.handleConfiguracoes}
        />
        <ListItem
          avatar={<Avatar icon="directions_bus" />}
          caption='BusTicket'
          legend='Passagens de ônibus'
          onClick={this.handleBusTicket}
        />
      </List>
    );

    const MenuFrame = () => {
      return (
        <div className="menu-frame">
          <ListTest />
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
        >
          <UserFrame />
          <MenuFrame />
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
              <Link href="#" label='Home' icon="home" onClick={this.handleHome} />
              <Link href="#" label='Reservas' icon="weekend" onClick={this.handleReservas} />
              <Link href="#" label="Histórico" icon="history" onClick={this.handleHistorico} />
              <Link
                href="https://github.com/craitz/web-booking"
                target="_blank"
                label="Código-fonte"
                icon="share"
              />
            </Navigation>
            <Navigation type="horizontal" className="nav-settings">
              <Link href="http://" label="Sair" icon="power_settings_new" />
            </Navigation>
          </AppBar>
          <div className="main-content">
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

export default withRouter(Mainframe);