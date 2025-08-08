import { Container, Row, Col } from "react-bootstrap";

const ExploreSection = () => {
  return (
    <Container fluid className="mb-5 px-4">
      <h4 className="text-light mb-3">Altro da esplorare</h4>
      <Row xs={1} lg={3} className="g-2 g-lg-3">
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Esplora per genere</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Decenni</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Attività e stati d'animo</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Worldwide</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Classifiche</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Audio spaziale</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Video musicali</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Nuovi artisti</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
        <Col>
          <div className="rounded-3 exploreButton d-flex justify-content-between px-2 py-3">
            <p className="m-0">Hit del passato</p>
            <p className="m-0">&gt;</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExploreSection;
