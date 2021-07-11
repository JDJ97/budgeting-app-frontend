import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar variant="light"  className="navBar">
      <Navbar.Brand href="/">
      </Navbar.Brand>
      <Nav className="mr-auto justify-content-between">
        <Nav.Link className="m-5" as={Link} to="/transactions">All Transactions</Nav.Link>
        <Nav.Link className="m-5" as={Link} to="/transactions/new">New Transaction</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
