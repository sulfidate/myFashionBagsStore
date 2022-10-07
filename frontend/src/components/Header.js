import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link to='/cart' className='nav-link '>
                <i className='fas fa-shopping-cart'></i> Cart
              </Link>
              <Link to='/login' className='nav-link'>
                <i className='fas fa-user'></i> Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
