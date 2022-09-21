import { Container, Nav, Navbar } from  "react-bootstrap";
import CartWidget from "./CartWidget";



const NavBar = () => {
    return (

    
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    SeatHero
            
                </Navbar.Brand> 
               
                <Nav>

                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="home">Nacionales</Nav.Link>
                    <Nav.Link href="home">Internacionales</Nav.Link>
                    <Nav.Link href="home">Nosotros</Nav.Link>
                    
                    </Nav>  
                    <CartWidget/>

            </Container>

           
        </Navbar>


  );
}
export default NavBar