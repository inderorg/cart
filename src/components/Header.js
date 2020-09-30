import React from 'react'
import Logo from './Logo'
import Cart from './Cart'
import Search from './Search'
class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Search />
        <Cart />
      </header>
    )
  }
}
export default Header
