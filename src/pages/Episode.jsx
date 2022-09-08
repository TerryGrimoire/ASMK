import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import episodes from "../data/episodes";

function Episode() {
  const { id, subId } = useParams();
  const navigate = useNavigate();

  const data = episodes[id];
  const handleClickMinus = () => {
    if (subId === "1") {
      navigate("/Podcast");
    }
    if (subId > 1) {
      navigate(`/Podcast/${id}/${subId - 1}`);
    }
  };

  const handleClickPlus = () => {
    if (parseInt(subId, 10) === data.subEpisode.length) {
      navigate("/Podcast");
    }
    if (parseInt(subId, 10) < data.subEpisode.length) {
      navigate(`/Podcast/${id}/${parseInt(subId, 10) + 1}`);
    }
  };
  return (
    <main>
      <h1>{data.title}</h1>
      <h2>{data.subEpisode[subId - 1].subtitle}</h2>
      <iframe
        src={data.subEpisode[subId - 1].src}
        frameBorder="0"
        title={data.subEpisode[subId - 1].subtitle}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <p>{data.subEpisode[subId - 1].description}</p>

      <div className="flex">
        <button
          type="button"
          className="button-style margin0r1r"
          onClick={handleClickMinus}
        >
          Épisode précédent
        </button>

        <button
          type="button"
          className="button-style margin0r1r"
          onClick={handleClickPlus}
        >
          Épisode suivant
        </button>
      </div>
    </main>
  );
}

export default Episode;
