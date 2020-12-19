import React from 'react'
import {NavLink} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import Button from './Buttons/Button';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    color: 'red'
  },
  bmBurgerBars: {
    background: '#ad0202',
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow:'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
}

class MenuToggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  showSettings (event) {
    event.preventDefault();
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  render () {
    return (
      <Menu 
      styles={styles}
      isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}
      >
      <NavLink to="/" onClick={() => this.closeMenu()}>
      <Button name="Главная" />
      </NavLink>
      <NavLink to="/portfolio" onClick={() => this.closeMenu()}>
      <Button name="Портфолио"/>
      </NavLink>
      <NavLink to="/contacts" onClick={() => this.closeMenu()}>
      <Button name="Контакты"/>
      </NavLink>
      </Menu>
    );
  }
}

export default MenuToggle