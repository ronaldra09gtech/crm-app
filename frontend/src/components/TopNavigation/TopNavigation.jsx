import React, { 
    Component, 
    Fragment 
} from 'react'
import { 
    Navbar, 
    Nav
} from 'react-bootstrap'

export class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" varian="dark">
        <Navbar.Brand href="#home">RFA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav.Link href='#deets'>Home</Nav.Link>
            <Nav.Link href='#deets'>About</Nav.Link>
            <Nav.Link href='#deets'>Services</Nav.Link>
            <Nav.Link href='#deets'>Courses</Nav.Link>
            <Nav.Link href='#deets'>Porfolio</Nav.Link>
            <Nav.Link href='#deets'>Contact US</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
      </Fragment>
    )
  }
}

export default TopNavigation
