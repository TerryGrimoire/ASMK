import React, { useEffect } from "react";
import Helmet from "react-helmet";

function Fans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Atas Sintir Met Kask | Allé dit partou</title>
        <link rel="canonical" href="http://mysite.com/Fans" />
      </Helmet>
      <h1>Nous aider</h1>
      <article className="flex-col">
        <h2>Écouter le podcast</h2>
        <p>
          Dans un premier temps, la meilleure chose que vous pouvez faire pour
          soutenir ASMK c'est d'écouter le podcast et les épisodes. C'est la
          première étape et probablement la plus importante. Plus le podcast
          sera écouté et plus on aura un impact sur la société et la population
          réunionnaise de manière génerale.
        </p>
      </article>

      <article className="flex-col">
        <h2>Liker, Commenter, Partager</h2>
        <p>
          Je remercie toutes les personnes ayant pris le temps d'écouter, liker
          et partager mon podcast. C'est aussi grâce à vous que la chaîne
          grandit et ça me donne de la force et du courage pour continuer à
          faire des épisodes. Si le podcast ASMK vous plait, n'hésitez pas à en
          parler autour de vous, à liker les posts sur Instagram/Facebook, les
          commenter et les partager.
        </p>
      </article>
      <article className="flex-col">
        <h2>Collaborer</h2>
        <p>
          Je reprends le temps de remercier tous les intervenants de mon
          podcasts ainsi que les futures collaborations. Chaque épisode est
          possible et nourri via vos expériences, vos opinions et le podcast ne
          serait pas pareil sans vous. Bien évidemment, je reste ouverte aux
          futures éventuelles collaboration sur les sujets de notre patrimoine
          linguistique et culturel.
        </p>
      </article>
    </main>
  );
}

export default Fans;
