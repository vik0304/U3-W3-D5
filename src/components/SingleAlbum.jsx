import { Col } from "react-bootstrap";
import { ExplicitFill } from "react-bootstrap-icons";

const SingleAlbum = ({ song }) => {
  return (
    <Col>
      <img
        src={song.album.cover_big}
        alt={`${song.title} cover`}
        className="img-fluid rounded-3 pointer mb-1"
      />
      <div className="d-flex justify-content-between">
        <p className="text-light albumTitle m-0 pointer">{song.title}</p>
        {song.explicit_content_lyrics ? (
          <ExplicitFill className="explicit" />
        ) : (
          ""
        )}
      </div>
      <p className="albumArtist albumTitle m-0 pointer">{song.artist.name}</p>
    </Col>
  );
};

export default SingleAlbum;
