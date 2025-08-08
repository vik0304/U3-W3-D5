import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsSection from "./components/NewsSection";
import AlbumSection from "./components/AlbumsSection";
import ExploreSection from "./components/ExploreSection";
import MyFooter from "./components/MyFooter";
import { Container, Row, Col } from "react-bootstrap";
import SideMenu from "./components/SideMenu";
import Mediabar from "./components/Mediabar";

function App() {
  return (
    <Container fluid className="app-container px-0">
      <Row className="app-row g-0 no-gutters">
        <Col className="d-none d-lg-block px-0 side-menu-col" lg={2}>
          <SideMenu />
        </Col>
        <Col xs={12} lg={10} className="main-content-col">
          <MyNavbar />
          <Mediabar />
          <NewsSection />
          <AlbumSection />
          <ExploreSection />
          <MyFooter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
