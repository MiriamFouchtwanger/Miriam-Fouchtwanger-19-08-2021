import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

//route from & to home page and from & to favoriate cities page.
export const MyNavbar = () => {
  return (
    <>
      <Nav className="container" style={{borderBottom:"solid 1px white"}}>
        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
        <Nav.Link as={Link} to="/favorites" className="text-white">Favorites</Nav.Link>
      </Nav>
    </>
  )
}