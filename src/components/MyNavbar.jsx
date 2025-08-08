import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <>
      <Navbar bg="#2e2e2e" data-bs-theme="dark" className="m-2 d-lg-none">
        <Container>
          <Nav>
            <Nav.Link href="#" className="navbarLinks">
              Accedi
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="p-0" href="#">
              <img src="/music.svg" alt="Apple Music Logo" />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="navbarLinks">
              Accedi
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
