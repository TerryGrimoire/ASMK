import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import episodes from "../data/episodes";

function Podcast() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Atas Sintir Met Kask | Podcasts</title>
        <link rel="canonical" href="http://mysite.com/Podcast" />
      </Helmet>
      <h1>Les podcasts</h1>
      <article>
        <p>
          Tous nos podcasts sont disponibles à l'écoute sur plusieurs
          plateformes telles que Deezer, Podcast Addict ou encore SoundCloud.
          Nous avons abordé pour le moment 2 grandes thématiques : Le retour au
          péi et Nout Langkozé Kréol.
        </p>
      </article>

      <section className="podcast-section">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-container">
            <h2>{episode.title}</h2>
            <div className="flex-col episodes-container2">
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
