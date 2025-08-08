import {
  FastForwardFill,
  PersonFill,
  PlayFill,
  Repeat,
  RewindFill,
  Shuffle,
  VolumeUpFill,
} from "react-bootstrap-icons";

const Mediabar = () => {
  return (
    <div className="d-none d-lg-flex mediaBarBg py-2">
      <div className="flex-grow-1 flex-basis-0 d-flex justify-content-center align-items-center">
        <Shuffle className="mediaBarControls mx-1" />
        <RewindFill className="mediaBarControls mx-1" />
        <PlayFill className="mediaBarControls playButton mx-1" />
        <FastForwardFill className="mediaBarControls mx-1" />
        <Repeat className="mediaBarControls mx-1" />
      </div>
      <div className="mediaBarBoxBg d-flex justify-content-center align-items-center rounded-3 flex-grow-1 flex-basis-0">
        <img src="/apple.svg" className="logo" alt="Apple logo" />
      </div>
      <div className="flex-grow-1 flex-basis-0 d-flex justify-content-evenly align-items-center">
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <VolumeUpFill className="mediaBarControls me-2" />
          <input
            type="range"
            name="vol"
            min="0"
            max="100"
            className="volumeBar"
          ></input>
        </div>

        <button className="d-flex align-items-center btnRed rounded-3 py-1 px-3 mx-3">
          <PersonFill className="me-1" />
          Accedi
        </button>
      </div>
    </div>
  );
};

export default Mediabar;
