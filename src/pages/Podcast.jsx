import React from "react";
import { Link } from "react-router-dom";
import episodes from "../data/episodes";

function Podcast() {
  return (
    <main className="container">
      <h1>Les podcasts</h1>

      <section className="podcast-section">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-container">
            <h2>{episode.title}</h2>
            <div className="flex-col">
              {episode.subEpisode &&
                episode.subEpisode.map((sub) => (
                  <Link
                    to={`/Podcast/${episode.id}/${sub.subId}`}
                    key={sub.subId}
                  >
                    <button
                      type="button"
                      className="button-style margin1r0 spotify"
                    >
                      {sub.subtitle}
                    </button>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Podcast;
