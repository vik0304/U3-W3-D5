import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import SingleAlbum from "./SingleAlbum";
import { useSelector } from "react-redux";

const AlbumSection = () => {
  const [songs, setSongs] = useState([]);
  const searchQuery = useSelector((state) => {
    return state.searchInput;
  });
  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery;
  const getSongs = () => {
    fetch(endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((songsObj) => {
        setSongs(songsObj.data.slice(0, 12));
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    getSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
  return (
    <Container fluid className="px-4 mb-4">
      <h4 className="text-light">Nuove uscite</h4>
      <Row xs={3} lg={6} className="g-3">
        {songs.map((song) => (
          <SingleAlbum key={song.id} song={song} />
        ))}
      </Row>
    </Container>
  );
};

export default AlbumSection;
