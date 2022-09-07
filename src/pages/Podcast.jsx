import React from "react";
import episodes from "../data/episodes";

function Podcast() {
  return (
    <main className="container">
      <h1>Les podcasts</h1>

      <section className="podcast-section">
        {episodes.map((episode) => (
          <div>
            <h2>{episode.title}</h2>
            <p>{episode.subtitle}</p>
            <iframe
              src={episode.src}
              width="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`${episode.title} ${episode.subtitle}`}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Podcast;
