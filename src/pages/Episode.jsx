import React from "react";
import { useParams } from "react-router-dom";
import episodes from "../data/episodes";

function Episode() {
  const { id, subId } = useParams();
  const data = episodes[id];
  return (
    <main>
      <h1>{data.title}</h1>
      <h2>{data.subEpisode[subId].subtitle}</h2>
      <iframe
        src={data.subEpisode[subId].src}
        frameBorder="0"
        title={data.subEpisode[subId].subtitle}
      />
      <p>{data.subEpisode[subId].description}</p>
    </main>
  );
}

export default Episode;
