import React from "react";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <main>
      <h1>Atas Sintir Met Kask</h1>
      <img src={logo} alt="logo" className="logo-main" />
      <p>
        A mi - chemin entre documentaire et journal de bord, Atas Sintir Met
        Kask (ASMK pour les intimes) est mon cahier de retour à la Réunion
        natale. Il vous invite à poser avec moi un regard nouveau sur la Réunion
        d’aujourd’hui et à aller à la rencontre de celles et ceux qui feront la
        Réunion de demain.
      </p>
      <a href="https://www.instagram.com/atas_sintir_met_kask/">
        Instagram: @atas_sintir_met_kask{" "}
      </a>
      <a href="https://www.facebook.com/podcastasmk">
        Facebook : Atas Sintir Met Kask
      </a>
    </main>
  );
}
