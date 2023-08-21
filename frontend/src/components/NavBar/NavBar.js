import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/'>Yodlr</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/register'>Register</Nav.Link>
            <Nav.Link href='/admin'>Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
