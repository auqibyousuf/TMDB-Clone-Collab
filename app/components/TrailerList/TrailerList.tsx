import React, { useState } from "react";
import TrailerCard from "../TrailerCard/TrailerCard";
import Modal from "react-modal";
import YouTube from "react-youtube";

const TrailerList = ({ trailers }: any) => {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleExerciseComplete = () => console.log("Do something");
  const [videoUrl, setVideoUrl] = useState("");
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }
  const checkElapsedTime = (e) => {
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setModalIsOpen(true);
    }
  };
  return (
    <div>
      <p>Latest Trailers</p>
      <ul className="flex flex-wrap">
        {trailers.map((trailer: any) => {
          const { backdrop_path, title, poster_path, name, id } = trailer;
          return (
            <li key={id}>
              <TrailerCard
                title={title}
                poster_path={poster_path}
                name={name}
              />
            </li>
          );
        })}
      </ul>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Exercise Completed"
        style={modalStyles}
      >
        <div>
          <h3>Completed the exercise?</h3>
          <button onClick={handleExerciseComplete}>Complete exercise</button>
        </div>
      </Modal>
      <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
      <YouTube videoId={videoCode} onStateChange={(e) => checkElapsedTime(e)} /> */}
    </div>
  );
};

export default TrailerList;
