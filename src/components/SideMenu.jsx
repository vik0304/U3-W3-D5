import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSubmit } from "../redux/actions/actions";
import { Broadcast, Grid, HouseDoor, Search } from "react-bootstrap-icons";

const SideMenu = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container className="border-end border-secondary sideMenu py-3 h-100">
      <img src="/music.svg" alt="Apple Music Logo" className="mb-4" />
      <Form
        onSubmit={(e) => {
          dispatch(handleSubmit(e, query));
          setQuery("");
        }}
      >
        <Form.Control
          type="text"
          placeholder={`Cerca`}
          className="mb-3 inputStyle"
          value={query}
          onChange={handleChange}
        />
      </Form>
      <div className="sideMenuButtons rounded-3 p-1 d-flex align-items-center">
        <HouseDoor className="sideMenuIcons me-2" /> Home
      </div>
      <div className="sideMenuButtons rounded-3 p-1 d-flex align-items-center">
        <Grid className="sideMenuIcons me-2" /> Novità
      </div>
      <div className="sideMenuButtons rounded-3 p-1 d-flex align-items-center">
        <Broadcast className="sideMenuIcons me-2" /> Radio
      </div>
    </Container>
  );
};

export default SideMenu;
