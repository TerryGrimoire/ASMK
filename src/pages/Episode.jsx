import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import episodes from "../data/episodes";

function Episode() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Atas Sintir Met Kask | {data.title} </title>
      </Helmet>
      <article className=" article-episode flex-col justify-center align-center ">
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

        <div className="flex margin2r0">
          {subId === "1" ? (
            <button
              type="button"
              className="button-style second-color margin0r1r"
              onClick={handleClickMinus}
            >
              ⬅️ Podcasts
            </button>
          ) : (
            <button
              type="button"
              className="button-style second-color margin0r1r"
              onClick={handleClickMinus}
            >
              Précédent
            </button>
          )}

          {parseInt(subId, 10) === data.subEpisode.length ? (
            <button
              type="button"
              className="button-style second-color margin0r1r"
              onClick={handleClickPlus}
            >
              ↪️ Podcasts
            </button>
          ) : (
            <button
              type="button"
              className="button-style second-color margin0r1r"
              onClick={handleClickPlus}
            >
              Suivant
            </button>
          )}
        </div>
      </article>
    </main>
  );
}

export default Episode;
