import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid className="footer py-4">
      <p className="mb-4 footerText">
        <span className="text-light">Italia</span> | English (UK)
      </p>
      <p className="mb-2 footerText">
        Copyright &#169; {new Date().getFullYear()} Apple Inc. Tutti i diritti
        riservati.
      </p>
      {/* inseriti come un singolo paragrago per fare prima */}
      <p className="m-0 footerText pointer">
        Condizioni dei servizi internet | Apple music e privacy | Avviso sui
        cookie | Supporto | Feedback
      </p>
    </Container>
  );
};

export default MyFooter;
