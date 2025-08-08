import { Col, Container, Row } from "react-bootstrap";

const NewsSection = () => {
  return (
    <Container fluid className="px-4">
      <div className="border-bottom border-secondary">
        <h1 className="text-light mt-4">Novità</h1>
      </div>
      <div className="scroll-x">
        <div className="me-3 d-flex flex-column justify-content-between">
          <div>
            <p className="text-secondary m-0 mt-3 fw-bold">
              NUOVA STAZIONE RADIO
            </p>
            <h5 className="text-light fw-semibold">
              Rilassati, al resto pensiamo noi. <br />
              Ascolta Apple Music Chill
            </h5>
          </div>
          <img
            src="/1a.png"
            className="rounded-3 newsThumbnail pointer"
            alt="Apple music chill thumbnail"
          />
        </div>
        <div className="me-3 d-flex flex-column justify-content-between">
          <div>
            <p className="text-secondary m-0 mt-3 fw-bold">
              NUOVA STAZIONE RADIO
            </p>
            <h5 className="text-light fw-semibold">
              Ecco la nuova casa della musica latina
            </h5>
          </div>
          <img
            src="/1b.png"
            className="rounded-3 newsThumbnail pointer"
            alt="Apple music chill thumbnail"
          />
        </div>
        <div className=" d-flex flex-column justify-content-between">
          <div>
            <p className="text-secondary m-0 mt-3 fw-bold">
              NUOVA STAZIONE RADIO
            </p>
            <h5 className="text-light fw-semibold">
              Sentiti al club direttamente dal divano di casa tua
            </h5>
          </div>
          <img
            src="/1c.png"
            className="rounded-3 newsThumbnail pointer"
            alt="Apple music chill thumbnail"
          />
        </div>
      </div>
      <h4 className="text-light mt-4">Nuovi episodi radio</h4>
      <Row xs={3} lg={5} xxl={6} className="g-3">
        <Col>
          <img
            src="/2a.png"
            className="rounded-3 img-fluid pointer"
            alt="Album Cover"
          />
          <p className="text-light albumTitle pointer">Prologo con Abuelo</p>
        </Col>
        <Col>
          <img
            src="/2b.png"
            className="rounded-3 img-fluid pointer"
            alt="Album Cover"
          />
          <p className="text-light albumTitle pointer">The Wanderer</p>
        </Col>
        <Col>
          <img
            src="/2c.png"
            className="rounded-3 img-fluid pointer"
            alt="Album Cover"
          />
          <p className="text-light albumTitle pointer">
            Michael Bublé & Carly Pearce
          </p>
        </Col>
        <Col className="d-none d-lg-block">
          <img
            src="/2d.png"
            className="rounded-3 img-fluid pointer"
            alt="Album Cover"
          />
          <p className="text-light albumTitle pointer">
            Stephan Moccio: The Zane Lowe Interview
          </p>
        </Col>
        <Col className="d-none d-lg-block">
          <img
            src="/2e.png"
            className="rounded-3 img-fluid pointer"
            alt="Album Cover"
          />
          <p className="text-light albumTitle pointer">
            Chart Spotlight: Julia Michaels
          </p>
        </Col>
        <Col className="d-none d-xxl-block">
          <img
            src="/2f.png"
            className="rounded-3 img-fluid pointer"
            alt="Album Cover"
          />
          <p className="text-light albumTitle pointer">Karri & Travis Mills</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsSection;
