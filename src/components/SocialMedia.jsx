import React, { useEffect } from "react";
import spotify from "../assets/spotify.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

function SocialMedia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h2 className="margin2r0 center">
        Suivez-nous et contactez-nous sur les réseaux
      </h2>
      <div className="flex-col align-start justify-center desk-center">
        <a
          href="https://www.facebook.com/podcastasmk"
          className="flex align-center justify-center"
        >
          <img src={facebook} className="social-media" alt="Facebook" />
          <p className="social-p">Atas Sintir Met Kask</p>
        </a>

        <a
          href="https://www.instagram.com/atas_sintir_met_kask/"
          className="flex align-center justify-center"
        >
          <img src={instagram} className="social-media" alt="Instagram" />
          <p className="social-p">@Atas_Sintir_Met_Kask</p>
        </a>

        <a
          href="https://open.spotify.com/show/75HdWSvlAD9xG55E8eEjSp"
          className="flex align-center justify-center"
        >
          <img src={spotify} className="social-media" alt="Spotify" />
          <p className="social-p">Atas Sintir Met Kask</p>
        </a>
      </div>

      <p className="margin2r0">
        Atas Sintir Met Kask est également disponible à l'écoute sur d'autres
        plateformes telles que Deezer, Podcast Addict, SoundCloud. 🎧
      </p>
    </div>
  );
}

export default SocialMedia;
